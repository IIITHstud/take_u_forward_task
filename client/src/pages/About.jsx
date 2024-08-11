export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Our Flashcard Learning Tool
          </h1>
          <div className="text-md flex flex-col gap-6">
            <p>
              Welcome to our Flashcard Learning Tool! We've developed an
              engaging platform designed to enhance your learning experience
              through the power of flashcards. Whether you're a student, a
              professional, or someone looking to learn something new, our tool
              is here to help you master new concepts effectively.
            </p>

            <p>Here’s what you can do with our tool:</p>
            <ul className="list-disc list-inside text-left">
              <li>
                <strong>Display Flashcards:</strong> Seamlessly present
                flashcards one at a time, featuring a question or term on the
                front and the corresponding answer or definition on the back,
                making learning interactive and enjoyable.
              </li>
              <li>
                <strong>Flip Cards:</strong> Click on any flashcard to flip it
                and instantly reveal the answer. This feature makes it easy to
                test your knowledge and reinforce your learning.
              </li>
              
              <li>
                <strong>Admin Dashboard:</strong> Our internal dashboard
                empowers administrators to manage flashcards efficiently. Admins
                can:
                <ul className="list-disc list-inside text-left">
                  <li>
                    <strong>Add Flashcards:</strong> Easily insert new
                    flashcards with a question and answer, expanding the
                    learning material available to users.
                  </li>
                  <li>
                    <strong>Edit Flashcards:</strong> Update the content of
                    existing flashcards to ensure accuracy and relevance.
                  </li>
                  <li>
                    <strong>Delete Flashcards:</strong> Remove flashcards from
                    the set to maintain a curated learning experience.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
