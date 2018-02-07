"use strict";

class Deck {
    constructor() {
        this.cards = [];
        this.discardedCards = [];
        this.suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.createDeck();
    }

    createDeck() {
        for (var suit of this.suits) {
            for (var value of this.values) {
                this.cards.push([value, suit]);
            }
        }
    }

    shuffle() {
        if (this.cards.length < 1) {
            return "No cards to shuffle";
        }
        else {
            var m = this.cards.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = this.cards[m];
                this.cards[m] = this.cards[i];
                this.cards[i] = t;
            }
            return "Shuffle finished";
        }
    }

    reset() {
        cards = [];
    }

    deal() {
        var m = this.cards.length;
        var randomIndex = Math.floor(Math.random() * m);
        return this.cards.splice(randomIndex, 1);
    }

    get remainingCards () {
        return this.cards;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck) {
        this.hand.push(deck.deal());
        return this.hand;
    }

    discardCard(index) {
        if (index > this.hand.length) {
            return "There's no card to remove there!";
        }
        else {
            this.hand.splice(index, 1);
        }
        return this.hand;
    }

    showHand() {
        return this.hand;
    }
}

class Game {
    constructor(players) {
        this.gameDeck = new Deck();
        this.players = players;
        this.losers = []
        this.currentPlayer = 0;
    } 

    dealNewGame() {
        for (player of this.players) {
            if (player.showHand()[0]) {
                player.hand = [];
            }
            player.takeCard(this.gameDeck);
            player.takeCard(this.gameDeck);
        }
    }

    getNextPlayer() {
        return this.players[this.currentPlayer % this.players.length];
    }

    hit() {
        return getNextPlayer().takeCard()
    }

    fold() {
        losers.push(this.players.splice(this.currentPlayer % this.players.length, 1));
    }

    calculateHand() {
        var total = 0;
        var ace = 0;
        for (var card of getNextPlayer.showHand()) {
            if (card[1] >= 10) {
                total += 10;
            }
            else if (card[1] == 1) {
                ace += 1;
            }
            else {
                total += card[1];
            }
        }
        
        if (total <= 10 && ace == 1) {
            total += 11;
        }

        else if (total <= 9 && ace == 2) {
            total += 11 + ace - 1
        }

        else if (total <= 8 && ace == 3) {
            total += 11 + ace - 1
        }

        else if (total <= 7 && ace == 4) {
            total += 11 + ace - 1
        }

        else {
            total += ace
        }

        if (total == 21) {
            return -1;
        }

        return checkBust(total)

    }

    stay() {
       getNextPlayer();
    }

}


let deck1 = new Deck();

deck1.shuffle();
console.log(deck1);

let player1 = new Player("Liam");
console.log(player1.showHand())
