export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');var d=t==null?'dark':t;if(d==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
