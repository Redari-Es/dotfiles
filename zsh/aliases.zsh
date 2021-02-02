

alias av='source venv/bin/activate'
alias py='python'
alias py3='python3'
alias c='clear'
alias cdiff='colordiff'
alias cs='calcurse'
alias dv='deactivate'
alias gc='git config credential.helper store'
alias gg='git clone'
alias ipy='ipython'
alias l='ls -la'
alias lg='lazygit'
alias psa='ps aux | grep'
alias ys='yay -S '
alias ms='mailsync'
alias mt='neomutt'
alias rl='echo $RANGER_LEVEL'
alias pu='python3 -m pudb'
alias ra='ranger'
# ra() {
	#if [ -z "$RANGER_LEVEL" ]
	#then
		#ranger
	#else
		#exit
	#fi
#}
#聊天室
alias roc='rocketchat-desktop'
#markdown python smdv preview
alias pre='smdv'
alias g='onefetch'
alias sra='sudo -E ranger'
alias sudo='sudo -E'
alias gs='git config credential.helper store'
alias bat='sudo tlp bat'
alias ac='sudo tlp ac'
alias gy='git-yolo'
alias nb='newsboat -r'
alias nt="sh -c 'cd $(pwd); st' > /dev/null 2>&1 &"
alias ta='tmux a'
alias t='tmux'
alias lo='lsof -p $(fps) +w'
#更新源并安装
alias Syyu='sudo pacman -Syyu'
#只更新源
alias Syy='sudo pacman -Syy'
#安装
alias SS='sudo pacman -S'
#pacman 清除依赖
alias Rns='sudo pacman -Rns'
#删除zsh历史并新建
alias zsh_history='mv .zsh_history .zsh_history_bad &strings .zsh_history_bad > .zsh_history & fc -R .zsh_history'
alias S="neofetch"
alias vim="nvim"
#矫正时间
alias ntptime="sudo ntpdate time1.aliyun.com"
