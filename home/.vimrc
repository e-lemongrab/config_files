"  This goes in ~
set nocompatible " must be the first line
filetype on
filetype indent on
filetype plugin on
set laststatus=2
set statusline=%<%f\%h%m%r%=%-20.(line=%l\ \ col=%c%V\ \ totlin=%L%)\ \ \%h%m%r%=%-40(bytval=0x%B,%n%Y%)\%P
set ofu=syntaxcomplete#Complete

" [...]
syntax on
set background=dark
" colorscheme solarized  Uncomment this line if you want to use the Solarized color scheme