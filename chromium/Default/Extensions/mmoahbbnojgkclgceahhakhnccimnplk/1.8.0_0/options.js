'use strict'

const ITEM_TPL = `{{#domains}}<li><input type="text" ui="wide" class="domain" value="{{.}}" placeholder="github.mydomain.com"><button type="button" class="remove">✕</button></li>{{/domains}}`
const GH_DOMAIN = 'github.com'

let list = $('#domains')
let saveBtn = $('#save')
let cancelBtn = $('#cancel')
let addBtn = $('#add')
let msg = $('#message')
let delayInput = $('#delay')
let readmeInput = $('#readme')
let projectsInput = $('#projects')
let showSelfInput = $('#show-self')
let sideInput = $('#side')
let themeInput = $('#theme')
let current
let storage = chrome.storage.sync || chrome.storage.local

function toOrigins(name) {
  return [`http://${name}/*`, `https://${name}/*`]
}

function concat(a, b) {
  return a.concat(b)
}

function restore() {
  storage.get(
    {
      domains: [],
      delay: 200,
      readme: true,
      disableProjects: false,
      showSelf: false,
      side: 'top',
      theme: 'github'
    },
    item => {
      current = item.domains
      list.append(Mustache.render(ITEM_TPL, { domains: current }))
      delayInput.val(item.delay)
      readmeInput.prop('checked', item.readme)
      projectsInput.prop('checked', item.disableProjects)
      showSelfInput.prop('checked', item.showSelf)
      sideInput.prop('value', item.side)
      themeInput.prop('value', item.theme)
    }
  )
}

function save() {
  let delay = delayInput.val()
  let readme = readmeInput.prop('checked')
  let disableProjects = projectsInput.prop('checked')
  let showSelf = showSelfInput.prop('checked')
  let side = sideInput.prop('value')
  let theme = themeInput.prop('value')

  let domains = []
  $('.domain').each(function() {
    let domain = $(this)
      .val()
      .trim()
    if (domains.indexOf(domain) === -1 && domain !== GH_DOMAIN) {
      domains.push(domain)
    }
  })

  let revoking = current
    .filter(domain => {
      return domains.indexOf(domain) === -1
    })
    .map(toOrigins)
    .reduce(concat, [])

  chrome.permissions.remove(
    {
      origins: revoking
    },
    () => {
      let granting = domains.map(toOrigins).reduce(concat, [])
      chrome.permissions.request(
        {
          origins: granting
        },
        granted => {
          let options = { delay, readme, disableProjects, showSelf, side, theme }
          if (granted) {
            Object.assign(options, { domains })
            current = domains
          } else {
            log('Domain permission denied.')
          }

          storage.set(options, () => {
            chrome.runtime.sendMessage({ event: 'optionschange' }, response => {
              if (response.success) {
                window.close()
              } else {
                log('Something went wrong.')
              }
            })
          })
        }
      )
    }
  )
}

function cancel() {
  window.close()
}

function addRow() {
  if ($('.domain').length >= 4) {
    log('That should be enough.', 3000)
    return
  }
  list.append(
    Mustache.render(ITEM_TPL, {
      domains: ['']
    })
  )
}

function removeRow() {
  $(this)
    .parent()
    .remove()
}

let logTimer
function log(message, duration) {
  clearTimeout(logTimer)
  msg.css({ opacity: 1 }).html(message)
  if (duration) {
    logTimer = setTimeout(() => {
      msg.animate({ opacity: 0 }, 500, () => msg.empty())
    }, duration)
  }
}

$(() => {
  saveBtn.on('click', save)
  cancelBtn.on('click', cancel)
  addBtn.on('click', addRow)
  list.on('keypress', '.domain', e => {
    if (e.which === 13) {
      save()
    }
  })
  list.on('click', '.remove', removeRow)

  restore()
})
