export XDG_CONFIG_HOME=$HOME/.config
export LOCALBIN=$XDG_CONFIG_HOME/bin
export PATH=$PATH:$LOCALBIN
export LOCALPROG=$HOME/prog
#Golang
export GOPATH=$HOME/go
#export GOPATH=/home/redaries/go
export PATH=$PATH:$HOME/go/bin
export GOROOT=/bin/go
export GOBIN=$HOME/go/gobin
export GOROOT=/usr/bin/go
export GOROOT=/usr/lib/go
export PATH=$PATH:$GOROOT/bin:$GOBIN

#brew
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
export PATH=$PATH:/home/linuxbrew/.linuxbrew/bin
export PATH=$PATH:/home/linuxbrew/.linuxbrew/sbin
export PATH=$PATH:$HOME/.linuxbrew/bin
export PATH=$PATH:$HOME/.linuxbrew/sbin
#ruby
export PATH=$PATH:$HOME/.gem/ruby/2.7.*
export PATH=$PATH:$HOME/.gem/ruby/2.7.*/bin
export PATH=$PATH:$HOME/.gem/ruby/2.7.0/bin
export PATH=$PATH:$HOME/.gem/ruby/2.7.1/bin

#node.js
export PATH=$HOME/.node_modules/bin:$PATH
export npm_config_prefix=~/.node_modules


export PATH=$PATH:/usr/local/bin
export PATH=$PATH:$HOME/.local/bin
export PATH=$PATH:/usr/local/Cellar/node/14.2.0/bin
export PATH=$PATH:$HOME/.cargo/bin
export PATH=$PATH:/snap/bin
export PATH=$PATH:/usr/local/opt/node@12/bin
#export TERM=xterm-256color
export PATH=$PATH:$LOCALPROG/flutter/bin
export PATH=$PATH:$LOCALPROG/flutter/bin/cache/dart-sdk/bin
export PATH="$PATH":"$HOME/.pub-cache/bin"
export TERM=xterm-256color
export TERM_ITALICS=true
export RANGER_LOAD_DEFAULT_RC="false"
#export TERM=screen-256color
export EDITOR=neovim
export ZSH_AUTOSUGGEST_USE_ASYNC=1
export ZSH_AUTOSUGGEST_MANUAL_REBIND=1
#editor
export EDITOR="nvim"
#pip
export PATH=$HOME/.local/bin/:$PATH
#curl
export PATH=$PATH:/usr/bin/curl
export PATH=$PATH:/usr/bin


#python
export PATH=/opt/anaconda/bin:$PATH
export PATH=/$HOME/PycharmProjects/:$PATH
export PATH=/$HOME/python/:$PATH
export PyCharm=/usr/bin/pycharm
export PATH=$PyCharm/bin:$PATH
