const sendBack = async (factura) => {
  try {
    const response = await fetch("url/guardar-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factura),
    });

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
fact