const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)

////////////////////////////////////////////////////////////////////
// DECK Nested CRUD Methods
////////////////////////////////////////////////////////////////////
router.post('/:id/decks', userController.createDeck)
router.get('/:id/decks', userController.getAllDecks)
router.get('/:id/decks/:deckId', userController.getOneDeck)
router.put('/:id/decks/:deckId', userController.editDeck)
router.delete('/:id/decks/:deckId', userController.removeDeck)

////////////////////////////////////////////////////////////////////
// CARDS Nested CRUD Methods
////////////////////////////////////////////////////////////////////
router.post('/:id/decks/:deckId/cards', userController.createCard)
router.get('/:id/decks/:deckId/cards', userController.getAllCards)
router.get('/:id/decks/:deckId/cards/:cardId', userController.getOneCard)
router.put('/:id/decks/:deckId/cards/:cardId', userController.editCard)
router.delete('/:id/decks/:deckId/cards/:cardId', userController.removeCard)

////////////////////////////////////////////////////////////////////
// ATTEMPTS Nested CRUD Methods
////////////////////////////////////////////////////////////////////
router.post('/:id/decks/:deckId/cards/:cardId/attempts', userController.createAttempt)
router.get('/:id/decks/:deckId/cards/:cardId/attempts', userController.getAllAttempts)
// router.get('/:id/attempts/:attemptsID', userController.getOneAttempt)
// router.put('/:id/attempts/:attemptsID', userController.editAttempt)
// router.delete('/:id/attempts/:attemptsID', userController.removeAttempt)

////////////////////////////////////////////////////////////////////
// User Attempts Methods
////////////////////////////////////////////////////////////////////
router.get('/:id/allAttempts', userController.getAllUserAttempts)

module.exports = router
