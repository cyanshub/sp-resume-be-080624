  // event handler
  export const handleChange = (event) => {
    // change 事件可以重複使用
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };