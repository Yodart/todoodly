const signup = async () => {
  const response = await fetch("http://127.0.0.1:5000/user", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("nameInput").value,
      password: document.getElementById("passwordInput").value,
    }),
  });
  if (response.status == 200) {
    const json = await response.json();
    document.cookie = json["token"];
    document.getElementById("errorMessage").innerHTML = "Account Created";
  } else {
    document.getElementById("errorMessage").innerHTML = "Wrong Password";
  }
};
