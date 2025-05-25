# DHBW-Mannheim-WI2023SEB-Onion

**Node.js API** (läuft auf Port 3000)
- GET /products
- GET /products/:id
- GET /users
- GET /users/:id

**Python Product Service** (Port 3001)
- GET /products
- GET /products/:id

**Go User Service** (Port 3002)
- GET /users
- GET /users/:id

**Architektur-Erklärung:**
- **Core / Domain**: Geschäftslogik und Modelle, keine Abhängigkeiten.
- **Application Layer**: Koordiniert Use Cases und kommuniziert mit den Repositories.
- **Infrastructure Layer**: Implementiert die Repositories, z.B. mit REST-Aufrufen zu Python/Go.
- **Außenwelt**: Python- und Go-Services – zeigen, dass diese Schicht beliebig austauschbar ist.
- Ergebnis: Klare Trennung, hohe Flexibilität bei Technologien und bessere Wartbarkeit.