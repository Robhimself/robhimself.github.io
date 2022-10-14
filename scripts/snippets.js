updateSnippets();
function updateSnippets() {
  html.innerHTML = "";
  html.innerHTML += /*HTML*/ `
      <div class="header">
          <div class="btn" onclick="updateView()">Home</div>
          <div class="btn" onclick="updateAbout()">About</div>
          <div class="btn" onclick="updateProject()">Projects</div>
          <div class="btn" onclick="updateSnippets()">Snippets</div>
          <div class="btn" onclick="updateContact()">Contact</div>
      </div>
      <div class="main">
        <div class="para">
          <p><a href="#top"></a>Her er en liste over mindre oppgaver jeg har gjort, for å styrke min evne til problemløsning. Mange av oppgavene er hentet fra <a href="https://www.freecodecamp.org/learn/coding-interview-prep/">FreeCodeCamp</a>. Dette er "work in progress".
            <ul>
              <li><a href="#100-doors">100-doors</a></li>
              <li><a href="#24-game">24 game</a></li>
              <li><a href="#9-billion-names">9 billion names of the God of integer</a></li>
              <li></li>
              <li></li>
            </ul>
          </p>
        </div>

  
        <div class="snippetlist">
          <div class="snippetOne">
            <p><a id="100-doors">100-doors.</a><hr>
              <i>There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
                The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
                The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.<br></i>
                <p>Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.</p>
              <br>
  
              <p>The første jeg tenker...</p>
            </p>
          </div> 
          


          <div class="snippetTwo">
            <p><a id="24-game">24 game</a><hr>
              <i>The 24 Game tests a person's mental arithmetic.

              The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24.<br></i>
                <p>Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists"..</p>
              <br>
              <strong>Rules:</strong><br>
              <ul>
                <li>Only the following operators/functions are allowed: multiplication, division, addition, subtraction.</li>
                <li>Division should use floating point or rational arithmetic, etc, to preserve remainders.</li>
                <li>Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).</li>
                <li>The order of the digits when given does not have to be preserved.</li>
              </ul>
  
              <p>The første jeg tenker...</p>
            </p>
          </div>  


          <div class="snippetOne">
            <p><a id="9-billion-names">9 billion names of the God of integer.</a><hr>
              <i>This task is a variation of the short story by Arthur C. Clarke.

              (Solvers should be aware of the consequences of completing this task.)<br></i>
                <p>In detail, to specify what is meant by a "name":
                    <ul>
                        <li>The integer 1 has 1 name "1".</li>
                        <li>The integer 2 has 2 names "1+1" and "2".</li>
                        <li>The integer 3 has 3 names "1+1+1", "2+1", and "3".</li>
                        <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
                        <li>The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
                    </ul>
                    Implement a function that returns the sum of the  n -th row.
                </p>
              <br>
  
              <p>The første jeg tenker...</p>
            </p>
          </div>  
        </div>
    </div>
      `;
}
