window.addEventListener('DOMContentLoaded', () => {
    const storedName = localStorage.getItem("servicename");
    if (storedName) {
      document.getElementById("servicename").value = storedName;
    }
  });