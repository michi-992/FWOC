import {defineStore} from 'pinia';

export const useGuesserStore = defineStore('guesser', () => {
    const deckId = ref();
    const remainingNrCards = ref();
    const card = ref();
    const guess = ref();
    const score = ref(0);

    onMounted(async () => {
        console.log('mounted');
        await getNewDeck();
    })

    async function getNewDeck() {
        const API = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        const data = await fetch(API).then(res => res.json())
        if (data.success) {
            deckId.value = data.deck_id;
            remainingNrCards.value = data.remaining;
            console.log(data);
        }
    }

    function setGuess(color) {
        guess.value = color;
    }


    async function drawCard() {
        if (remainingNrCards.value <= 0) {
            return;
        }

        const API = `https://www.deckofcardsapi.com/api/deck/${deckId.value}/draw/?count=1`
        const data = await fetch(API).then(res => res.json())
        if (data.success) {
            card.value = data.cards[0];
            remainingNrCards.value--;
            console.log(data);
            evaluateGuess();
        }
    }

    function evaluateGuess() {
        const { suit } = card.value;

        const cardColor = ["HEARTS", "DIAMONDS",].includes(suit) ? "red" : "black";

        if (cardColor === guess.value) {
            score.value++;
        }
    }

    function resetScore() {
        score.value = 0;
    }


    return {
        score,
        deckId,
        guess,
        card,
        remainingNrCards,
        drawCard,
        setGuess,
        getNewDeck,
        resetScore,
    };

});
