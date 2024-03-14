document.getElementById('Finalizar').addEventListener('click', () => {
  const data = {
      food: document.getElementById('food').value,
      quantity: document.getElementById('quantity').value,
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      pagamento: document.getElementById('Pagamento').value
  };

  const jsonData = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonData], { type: 'application/json' });
  saveAs(blob, 'doc_json.json');
});

document.getElementById('Cancelar').addEventListener('click', () => {
  document.getElementById('doc_json.json').reset();
});
