// Define the Note class
class Note {
  constructor(id, content) {
    this.id = id;
    this.content = content;
    this.connectedNotes = [];
  }

  connectTo(note) {
    this.connectedNotes.push(note);
  }
}

// Create some sample notes
const note1 = new Note(1, "Hello! How are you?");
const note2 = new Note(2, "I'm having a great day!");
const note3 = new Note(3, "Let's grab lunch sometime.");

// Connect the notes
note1.connectTo(note2);
note2.connectTo(note3);

// Function to display the notes
function displayNotes() {
  const noteContainer = document.getElementById("note-container");

  // Clear the note container
  noteContainer.innerHTML = "";

  // Iterate over the notes and create HTML elements
  for (const note of [note1, note2, note3]) {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `<p>${note.content}</p>`;

    // Add event listener for clicking on the note
    noteElement.addEventListener("click", function () {
      alert(`Clicked note ${note.id}`);
    });

    noteContainer.appendChild(noteElement);
  }
}

// Call the displayNotes function to initially display the notes
displayNotes();
