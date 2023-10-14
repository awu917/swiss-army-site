import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED
  history: String,
  setHistory: Dispatch<SetStateAction<String>>,
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // Manages the current amount of times the button is clicked
    
    // This function is triggered when the button is clicked.
    function handleSubmit(commandString:string) {
      var dieeaseases = ["malaria","homosexuality","polio","boobonic plague"]
      var randNum = Math.floor(Math.random()* dieeaseases.length)
      var output = dieeaseases[randNum]

      // CHANGED
      props.setHistory(output)
    }
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>symptoms:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button onClick={() => handleSubmit(commandString)}>Submit</button>
        </div>
    );
  }