
export default function createContact() {
    const content = document.getElementById('content');

    // Dishes page
    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerHTML = `
    <div class="left-section">
      <h1 class="title">RUZA'S RISTORANTE</h1>
      <p>Rua Hedwig Reiss, 192</p>
      <p>Joinville - SC</p>
      <p>Phone +55 47999487723</p>
      <h1 class="title opening-hours">OPENING HOURS</h1>
      <table>
        <thead>
            <tr>
              <th></th>
              <th>Lunch</th>
              <th>Evenings</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Wednesday - Thursday </th>
                <td>Closed</td>
                <td>18:00 - 23:00</td>
            </tr>
            <tr>
              <th>Friday - Saturday</th>
              <td>12:00 - 15:30</td>
              <td>18:30 - 23:30</td>
            </tr>
        </tbody>
    </table>
    <p>(The elevator will be operational to the 8th floor 10 minutes prior to and during the restaurant opening hours)</p>
    <p class="title">PARKING</p>
    <p>There are Euro-Park pay parking spaces close to the restaurant.</p>
    
  </div>
  <div class="right-section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7947791930633!2d-48.87730488442405!3d-26.30075208339499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb008aa9b11d7%3A0x22d87550d8b6168e!2sRua%20Hedwig%20Reiss%2C%20192%20-%20Gl%C3%B3ria%2C%20Joinville%20-%20SC%2C%2089216-455!5e0!3m2!1spt-BR!2sbr!4v1659119868619!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>`
    content.append(contact);
}