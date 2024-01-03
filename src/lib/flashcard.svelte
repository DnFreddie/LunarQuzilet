<script lang="ts">
    let words: string[] = ["test", "lol", "pies"];
    let translations: string[] = ["test_translation", "lol_translation", "dog"];
    let currentWordIndex: number = 0;
    let userInput: string = "";
    let letterNumber: number = 0;

    let word: string = words[currentWordIndex];
    let translation: string = translations[currentWordIndex];

    $: if (letterNumber > 0) {
        userInput = translation.substring(0, letterNumber);
    }

    function checkTranslation() {
        if (userInput === translation) {
            currentWordIndex++;
            if (currentWordIndex < words.length) {
                word = words[currentWordIndex];
                translation = translations[currentWordIndex];
                letterNumber = 0;
                userInput = "";
            } else {
                console.log("You won!");
            }
        } else {
            console.log("Try again");
            if (letterNumber < translation.length) {
                letterNumber++;
            }
        }
    }
</script>


<div class="flex flex-col justify-center items-center">
    <div>
        <p>
            {word}
        </p>
        <input bind:value={userInput} type="text" placeholder=" translation">
    </div>

    <button on:click={checkTranslation} type="button"> 
        Check
    </button>

</div>
