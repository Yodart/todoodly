const signup = async () => {
  const response = await fetch("http://127.0.0.1:5000/user", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name-input").value,
      password: document.getElementById("password-input").value,
    }),
  });
  if (response.status == 200) {
    const json = await response.json();
    document.cookie = json["token"];
    document.getElementById("success-alert").style.display = "block";
  } else {
    document.getElementById("failed-alert").style.display = "block";
  }
};

const onInputChange = () => {
  document.getElementById("success-alert").style.display = "none";
  document.getElementById("failed-alert").style.display = "none";
};
