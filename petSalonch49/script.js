// Pet constructor function
function Pet(name, age, gender, breed, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.color = color;
}

// Array to store pets
let pets = [];

// Function to register a new pet
function registerPet(event) {
    event.preventDefault();
    
    const name = document.getElementById('petName').value;
    const age = document.getElementById('petAge').value;
    const gender = document.getElementById('petGender').value;
    const breed = document.getElementById('petBreed').value;
    const color = document.getElementById('petColor').value;

    const newPet = new Pet(name, age, gender, breed, color);
    pets.push(newPet);

    displayPets();
    event.target.reset();

    // Show success message
    alert('Congratulations! Your pet has been registered for our VIP services.');
}

// Function to display pets
function displayPets() {
    const petCards = document.getElementById('petCards');
    petCards.innerHTML = '';

    pets.forEach((pet, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">Age: ${pet.age} | Gender: ${pet.gender}</p>
                    <p class="card-text">Breed: ${pet.breed}</p>
                    <p class="card-text">Color: ${pet.color}</p>
                    <button onclick="deletePet(${index})" class="btn btn-danger btn-sm">Remove</button>
                </div>
            </div>
        `;
        petCards.appendChild(card);
    });
}

// Function to delete a pet
function deletePet(index) {
    if (confirm('Are you sure you want to remove this pet from our VIP list?')) {
        pets.splice(index, 1);
        displayPets();
    }
}

// Event listener for form submission
document.getElementById('pet-form').addEventListener('submit', registerPet);

// Initial display of pets
displayPets();

// Add some sample pets for demonstration
pets.push(new Pet('Bella', 3, 'Female', 'Labrador', 'Golden'));
pets.push(new Pet('Max', 2, 'Male', 'Persian Cat', 'White'));
displayPets();