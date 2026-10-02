import { useState } from "react";
import "./App.css";

function App() {
  // ================================
  // USERS
  // ================================

  const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];


  // ================================
  // MESSAGE STATE
  // ================================

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "PubNub Bot",
      initials: "PN",
      text: "Welcome to Team Chat. 👋👋 Send a message now to start interacting with other users in the app. ⬇️",
      time: "12:16",
      likes: 0,
      color: "#e57373"
    },

    {
      id: 2,
      username: "Gregory Goolsby",
      initials: "GG",
      text: "Hey everyone!",
      time: "17:28",
      likes: 0,
      color: "#d4e157"
    },

    {
      id: 3,
      username: "Elin Emmanuel",
      initials: "EE",
      text: "Oh hi, Gregory! Rolande is around, too...",
      time: "17:30",
      likes: 0,
      color: "#e57373"
    }
  ]);


  // ================================
  // EMOJI STATES
  // ================================

  const [showEmoji, setShowEmoji] = useState(false);

  const [emojiSearch, setEmojiSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Smileys");


  // ================================
  // EMOJI DATA
  // ================================

  const emojiData = [

    // ----------------
    // SMILEYS
    // ----------------

    {
      emoji: "😀",
      name: "grinning happy smile smiley",
      category: "Smileys"
    },
    {
      emoji: "😁",
      name: "grin happy smile",
      category: "Smileys"
    },
    {
      emoji: "😂",
      name: "laugh laughing tears joy funny happy",
      category: "Smileys"
    },
    {
      emoji: "🤣",
      name: "rofl laugh funny",
      category: "Smileys"
    },
    {
      emoji: "😃",
      name: "happy smile smiley",
      category: "Smileys"
    },
    {
      emoji: "😄",
      name: "happy smile",
      category: "Smileys"
    },
    {
      emoji: "😅",
      name: "happy nervous sweat smile",
      category: "Smileys"
    },
    {
      emoji: "😆",
      name: "laugh happy smile",
      category: "Smileys"
    },
    {
      emoji: "😉",
      name: "wink",
      category: "Smileys"
    },
    {
      emoji: "😊",
      name: "happy smile blush",
      category: "Smileys"
    },
    {
      emoji: "😍",
      name: "love heart eyes happy",
      category: "Smileys"
    },
    {
      emoji: "😘",
      name: "kiss love",
      category: "Smileys"
    },
    {
      emoji: "🥰",
      name: "love hearts happy",
      category: "Smileys"
    },
    {
      emoji: "😎",
      name: "cool sunglasses",
      category: "Smileys"
    },
    {
      emoji: "🤩",
      name: "excited star eyes happy",
      category: "Smileys"
    },
    {
      emoji: "🤔",
      name: "thinking",
      category: "Smileys"
    },
    {
      emoji: "😢",
      name: "sad cry crying tear",
      category: "Smileys"
    },
    {
      emoji: "😭",
      name: "cry crying tears sad",
      category: "Smileys"
    },
    {
      emoji: "😡",
      name: "angry mad",
      category: "Smileys"
    },
    {
      emoji: "😠",
      name: "angry mad",
      category: "Smileys"
    },
    {
      emoji: "😱",
      name: "scared fear scream",
      category: "Smileys"
    },
    {
      emoji: "😴",
      name: "sleep sleepy tired",
      category: "Smileys"
    },
    {
      emoji: "🥳",
      name: "party happy celebration",
      category: "Smileys"
    },
    {
      emoji: "😇",
      name: "angel innocent",
      category: "Smileys"
    },
    {
      emoji: "🤗",
      name: "hug happy",
      category: "Smileys"
    },
    {
      emoji: "😋",
      name: "yum delicious food",
      category: "Smileys"
    },
    {
      emoji: "😜",
      name: "wink tongue funny",
      category: "Smileys"
    },
    {
      emoji: "😝",
      name: "tongue funny",
      category: "Smileys"
    },
    {
      emoji: "🤪",
      name: "crazy funny",
      category: "Smileys"
    },
    {
      emoji: "🤯",
      name: "mind blown shocked",
      category: "Smileys"
    },


    // ----------------
    // ANIMALS
    // ----------------

    {
      emoji: "🐶",
      name: "dog puppy pet animal",
      category: "Animals"
    },
    {
      emoji: "🐱",
      name: "cat kitten pet animal",
      category: "Animals"
    },
    {
      emoji: "🐭",
      name: "mouse animal",
      category: "Animals"
    },
    {
      emoji: "🐹",
      name: "hamster pet animal",
      category: "Animals"
    },
    {
      emoji: "🐰",
      name: "rabbit bunny animal",
      category: "Animals"
    },
    {
      emoji: "🦊",
      name: "fox animal",
      category: "Animals"
    },
    {
      emoji: "🐻",
      name: "bear animal",
      category: "Animals"
    },
    {
      emoji: "🐼",
      name: "panda animal",
      category: "Animals"
    },
    {
      emoji: "🐨",
      name: "koala animal",
      category: "Animals"
    },
    {
      emoji: "🐯",
      name: "tiger animal",
      category: "Animals"
    },
    {
      emoji: "🦁",
      name: "lion animal",
      category: "Animals"
    },
    {
      emoji: "🐮",
      name: "cow animal",
      category: "Animals"
    },
    {
      emoji: "🐷",
      name: "pig animal",
      category: "Animals"
    },
    {
      emoji: "🐸",
      name: "frog animal",
      category: "Animals"
    },
    {
      emoji: "🐵",
      name: "monkey animal",
      category: "Animals"
    },
    {
      emoji: "🦄",
      name: "unicorn fantasy animal",
      category: "Animals"
    },
    {
      emoji: "🐝",
      name: "bee insect animal",
      category: "Animals"
    },
    {
      emoji: "🦋",
      name: "butterfly insect animal",
      category: "Animals"
    },
    {
      emoji: "🐢",
      name: "turtle animal",
      category: "Animals"
    },
    {
      emoji: "🐍",
      name: "snake animal",
      category: "Animals"
    },
    {
      emoji: "🐙",
      name: "octopus sea animal",
      category: "Animals"
    },
    {
      emoji: "🐠",
      name: "fish sea animal",
      category: "Animals"
    },
    {
      emoji: "🐬",
      name: "dolphin sea animal",
      category: "Animals"
    },
    {
      emoji: "🐳",
      name: "whale sea animal",
      category: "Animals"
    },


    // ----------------
    // FOOD
    // ----------------

    {
      emoji: "🍎",
      name: "apple fruit food",
      category: "Food"
    },
    {
      emoji: "🍊",
      name: "orange fruit food",
      category: "Food"
    },
    {
      emoji: "🍋",
      name: "lemon fruit food",
      category: "Food"
    },
    {
      emoji: "🍌",
      name: "banana fruit food",
      category: "Food"
    },
    {
      emoji: "🍉",
      name: "watermelon fruit food",
      category: "Food"
    },
    {
      emoji: "🍇",
      name: "grapes fruit food",
      category: "Food"
    },
    {
      emoji: "🍓",
      name: "strawberry fruit food",
      category: "Food"
    },
    {
      emoji: "🍒",
      name: "cherry fruit food",
      category: "Food"
    },
    {
      emoji: "🍑",
      name: "peach fruit food",
      category: "Food"
    },
    {
      emoji: "🥭",
      name: "mango fruit food",
      category: "Food"
    },
    {
      emoji: "🍍",
      name: "pineapple fruit food",
      category: "Food"
    },
    {
      emoji: "🥝",
      name: "kiwi fruit food",
      category: "Food"
    },
    {
      emoji: "🥑",
      name: "avocado food",
      category: "Food"
    },
    {
      emoji: "🥕",
      name: "carrot vegetable food",
      category: "Food"
    },
    {
      emoji: "🌽",
      name: "corn vegetable food",
      category: "Food"
    },
    {
      emoji: "🥦",
      name: "broccoli vegetable food",
      category: "Food"
    },
    {
      emoji: "🍞",
      name: "bread food",
      category: "Food"
    },
    {
      emoji: "🍕",
      name: "pizza food",
      category: "Food"
    },
    {
      emoji: "🍔",
      name: "burger hamburger food",
      category: "Food"
    },
    {
      emoji: "🍟",
      name: "fries food",
      category: "Food"
    },
    {
      emoji: "🌭",
      name: "hotdog food",
      category: "Food"
    },
    {
      emoji: "🍿",
      name: "popcorn food",
      category: "Food"
    },
    {
      emoji: "🍩",
      name: "donut food",
      category: "Food"
    },
    {
      emoji: "🍪",
      name: "cookie food",
      category: "Food"
    },
    {
      emoji: "🎂",
      name: "birthday cake food",
      category: "Food"
    },
    {
      emoji: "🍰",
      name: "cake dessert food",
      category: "Food"
    },
    {
      emoji: "🍫",
      name: "chocolate food",
      category: "Food"
    },
    {
      emoji: "🍭",
      name: "candy sweet food",
      category: "Food"
    },
    {
      emoji: "☕",
      name: "coffee drink",
      category: "Food"
    },


    // ----------------
    // TRAVEL
    // ----------------

    {
      emoji: "🌍",
      name: "earth world globe",
      category: "Travel"
    },
    {
      emoji: "🌎",
      name: "earth world globe",
      category: "Travel"
    },
    {
      emoji: "🌏",
      name: "earth world globe",
      category: "Travel"
    },
    {
      emoji: "🌐",
      name: "globe world internet",
      category: "Travel"
    },
    {
      emoji: "🏔️",
      name: "mountain nature",
      category: "Travel"
    },
    {
      emoji: "🌋",
      name: "volcano nature",
      category: "Travel"
    },
    {
      emoji: "🏖️",
      name: "beach vacation travel",
      category: "Travel"
    },
    {
      emoji: "🏝️",
      name: "island vacation beach",
      category: "Travel"
    },
    {
      emoji: "🌈",
      name: "rainbow",
      category: "Travel"
    },
    {
      emoji: "☀️",
      name: "sun sunny weather",
      category: "Travel"
    },
    {
      emoji: "🌧️",
      name: "rain weather",
      category: "Travel"
    },
    {
      emoji: "❄️",
      name: "snow winter cold",
      category: "Travel"
    },
    {
      emoji: "🌙",
      name: "moon night",
      category: "Travel"
    },
    {
      emoji: "⭐",
      name: "star",
      category: "Travel"
    },
    {
      emoji: "✨",
      name: "sparkles",
      category: "Travel"
    },
    {
      emoji: "🔥",
      name: "fire hot",
      category: "Travel"
    },
    {
      emoji: "💧",
      name: "water",
      category: "Travel"
    },
    {
      emoji: "🌊",
      name: "ocean sea water",
      category: "Travel"
    },


    // ----------------
    // VEHICLES
    // ----------------

    {
      emoji: "🚗",
      name: "car automobile vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚕",
      name: "taxi car vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚙",
      name: "car vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚌",
      name: "bus vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🏎️",
      name: "race car vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚓",
      name: "police car vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚑",
      name: "ambulance vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚒",
      name: "fire truck vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚚",
      name: "truck vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🏍️",
      name: "motorcycle bike vehicle",
      category: "Vehicles"
    },
    {
      emoji: "🚲",
      name: "bicycle bike vehicle",
      category: "Vehicles"
    },
    {
      emoji: "✈️",
      name: "airplane flight travel",
      category: "Vehicles"
    },
    {
      emoji: "🚀",
      name: "rocket space",
      category: "Vehicles"
    },
    {
      emoji: "🚁",
      name: "helicopter",
      category: "Vehicles"
    },
    {
      emoji: "🚢",
      name: "ship boat travel",
      category: "Vehicles"
    },
    {
      emoji: "🚂",
      name: "train travel",
      category: "Vehicles"
    },


    // ----------------
    // SPORTS
    // ----------------

    {
      emoji: "⚽",
      name: "football soccer sport",
      category: "Sports"
    },
    {
      emoji: "🏀",
      name: "basketball sport",
      category: "Sports"
    },
    {
      emoji: "🏈",
      name: "football sport",
      category: "Sports"
    },
    {
      emoji: "⚾",
      name: "baseball sport",
      category: "Sports"
    },
    {
      emoji: "🎾",
      name: "tennis sport",
      category: "Sports"
    },
    {
      emoji: "🏐",
      name: "volleyball sport",
      category: "Sports"
    },
    {
      emoji: "🏆",
      name: "trophy winner award sport",
      category: "Sports"
    },
    {
      emoji: "🥇",
      name: "gold medal first winner sport",
      category: "Sports"
    },
    {
      emoji: "🥈",
      name: "silver medal second sport",
      category: "Sports"
    },
    {
      emoji: "🥉",
      name: "bronze medal third sport",
      category: "Sports"
    },
    {
      emoji: "🎮",
      name: "game gaming",
      category: "Sports"
    },


    // ----------------
    // LOVE / HEARTS
    // ----------------

    {
      emoji: "❤️",
      name: "love heart red heart",
      category: "Love"
    },
    {
      emoji: "🧡",
      name: "love heart orange heart",
      category: "Love"
    },
    {
      emoji: "💛",
      name: "love heart yellow heart",
      category: "Love"
    },
    {
      emoji: "💚",
      name: "love heart green heart",
      category: "Love"
    },
    {
      emoji: "💙",
      name: "love heart blue heart",
      category: "Love"
    },
    {
      emoji: "💜",
      name: "love heart purple heart",
      category: "Love"
    },
    {
      emoji: "🖤",
      name: "love heart black heart",
      category: "Love"
    },
    {
      emoji: "🤍",
      name: "love heart white heart",
      category: "Love"
    },
    {
      emoji: "🤎",
      name: "love heart brown heart",
      category: "Love"
    },
    {
      emoji: "💔",
      name: "broken heart love sad",
      category: "Love"
    },
    {
      emoji: "💕",
      name: "love hearts two hearts",
      category: "Love"
    },
    {
      emoji: "💞",
      name: "love hearts revolving hearts",
      category: "Love"
    },
    {
      emoji: "💓",
      name: "love heart beating heart",
      category: "Love"
    },
    {
      emoji: "💗",
      name: "love heart growing heart",
      category: "Love"
    },
    {
      emoji: "💖",
      name: "love heart sparkling heart",
      category: "Love"
    },
    {
      emoji: "💘",
      name: "love heart cupid arrow",
      category: "Love"
    },
    {
      emoji: "💝",
      name: "love heart gift",
      category: "Love"
    },
    {
      emoji: "💟",
      name: "love heart decoration",
      category: "Love"
    },
    {
      emoji: "😍",
      name: "love heart eyes",
      category: "Love"
    },
    {
      emoji: "🥰",
      name: "love hearts happy",
      category: "Love"
    },
    {
      emoji: "😘",
      name: "love kiss",
      category: "Love"
    },


    // ----------------
    // SYMBOLS
    // ----------------

    {
      emoji: "✅",
      name: "check correct yes done",
      category: "Symbols"
    },
    {
      emoji: "❌",
      name: "cross wrong no",
      category: "Symbols"
    },
    {
      emoji: "❗",
      name: "exclamation important",
      category: "Symbols"
    },
    {
      emoji: "❓",
      name: "question",
      category: "Symbols"
    },
    {
      emoji: "‼️",
      name: "double exclamation",
      category: "Symbols"
    },
    {
      emoji: "⁉️",
      name: "question exclamation",
      category: "Symbols"
    },
    {
      emoji: "⭕",
      name: "circle",
      category: "Symbols"
    },
    {
      emoji: "🚫",
      name: "no prohibited",
      category: "Symbols"
    },
    {
      emoji: "⚠️",
      name: "warning alert",
      category: "Symbols"
    },
    {
      emoji: "♻️",
      name: "recycle environment",
      category: "Symbols"
    },


    // ----------------
    // FLAGS
    // ----------------

    {
      emoji: "🏳️",
      name: "white flag",
      category: "Flags"
    },
    {
      emoji: "🏴",
      name: "black flag",
      category: "Flags"
    },
    {
      emoji: "🏁",
      name: "finish race flag",
      category: "Flags"
    },
    {
      emoji: "🚩",
      name: "red flag",
      category: "Flags"
    },
    {
      emoji: "🏳️‍🌈",
      name: "rainbow flag",
      category: "Flags"
    },
    {
      emoji: "🏴‍☠️",
      name: "pirate flag",
      category: "Flags"
    }
  ];


  // ================================
  // FREQUENTLY USED
  // ================================

  const frequentlyUsed = [
    "😀",
    "👍",
    "😘",
    "😆",
    "😍",
    "😜",
    "😅",
    "😂",
    "😉",
    "🤔",
    "👋",
    "😱"
  ];


  // ================================
  // SEARCH FUNCTION
  // ================================

  const getFilteredEmojis = () => {

    const search = emojiSearch
      .trim()
      .toLowerCase();

    // SEARCH MODE
    if (search !== "") {

      return emojiData.filter((item) => {

        const searchableText =
          `${item.name} ${item.category}`
            .toLowerCase();

        return searchableText.includes(search);
      });
    }


    // CATEGORY MODE
    return emojiData.filter(
      (item) =>
        item.category === selectedCategory
    );
  };


  // ================================
  // SEND MESSAGE
  // ================================

  const sendMessage = () => {

    if (message.trim() === "") {
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * userList.length
    );

    const username =
      userList[randomIndex];

    const colors = [
      "#e57373",
      "#64b5f6",
      "#81c784",
      "#ba68c8",
      "#ffb74d"
    ];

    const color =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    const initials =
      username.substring(0, 2).toUpperCase();

    const newMessage = {
      id: Date.now(),
      username: username,
      initials: initials,
      text: message,
      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      ),
      likes: 0,
      color: color
    };

    setMessages([
      ...messages,
      newMessage
    ]);

    setMessage("");
    setShowEmoji(false);
  };


  // ================================
  // LIKE
  // ================================

  const likeMessage = (id) => {

    setMessages(
      messages.map((msg) => {

        if (msg.id === id) {

          return {
            ...msg,
            likes: msg.likes + 1
          };
        }

        return msg;
      })
    );
  };


  // ================================
  // ADD EMOJI
  // ================================

  const addEmoji = (emoji) => {

    setMessage(
      (previous) =>
        previous + emoji
    );
  };


  // ================================
  // ENTER
  // ================================

  const handleKeyDown = (event) => {

    if (event.key === "Enter") {
      sendMessage();
    }
  };


  // ================================
  // UI
  // ================================

  return (

    <div className="chat-app">


      {/* ============================
          SIDEBAR
      ============================ */}

      <aside className="sidebar">

        <div className="profile">

          <div className="profile-avatar">

            RR

            <span className="online-dot"></span>

          </div>

          <div className="profile-info">

            <h3>
              Rolande Raimondi
            </h3>

            <p>
              Research Nurse
            </p>

          </div>

        </div>


        <div className="conversation-title">

          <span>
            Conversations
          </span>

          <button className="add-button">
            +
          </button>

        </div>


        <div className="channels">

          <div className="channel">

            <div className="hash-icon">
              #
            </div>

            <span>
              Poland Office
            </span>

          </div>


          <div className="channel active">

            <div className="hash-icon">
              #
            </div>

            <span>
              Introductions
            </span>

          </div>


          <div className="channel">

            <div className="hash-icon">
              #
            </div>

            <span>
              India Office
            </span>

          </div>

        </div>

      </aside>


      {/* ============================
          CHAT
      ============================ */}

      <main className="chat-area">


        <header className="chat-header">

          <div>

            <h2>
              Introductions
            </h2>

            <p>
              This Channel Is For Company Wide Chatter
            </p>

          </div>

          <div className="member-info">
            3 | 100
          </div>

        </header>


        {/* MESSAGES */}

        <section className="messages">

          {messages.map((msg) => (

            <div
              className="message-block"
              key={msg.id}
            >

              <div
                className="message-avatar"
                style={{
                  backgroundColor:
                    msg.color
                }}
              >
                {msg.initials}
              </div>


              <div className="message-content">

                <div className="message-header">

                  <span className="message-username">
                    {msg.username}
                  </span>

                  <span className="message-time">
                    {msg.time}
                  </span>

                </div>


                <div className="message-bubble">

                  <span>
                    {msg.text}
                  </span>

                  <button
                    className="like-button"
                    onClick={() =>
                      likeMessage(msg.id)
                    }
                  >
                    👍 {msg.likes}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </section>


        {/* ============================
            EMOJI POPUP
        ============================ */}

        {showEmoji && (

          <div className="emoji-popup">


            {/* CATEGORY BAR */}

            <div className="emoji-categories">

              <button
                onClick={() => {
                  setSelectedCategory("Smileys");
                  setEmojiSearch("");
                }}
              >
                😀
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Animals");
                  setEmojiSearch("");
                }}
              >
                🐶
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Food");
                  setEmojiSearch("");
                }}
              >
                🍎
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Travel");
                  setEmojiSearch("");
                }}
              >
                🌐
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Vehicles");
                  setEmojiSearch("");
                }}
              >
                🚗
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Sports");
                  setEmojiSearch("");
                }}
              >
                🏆
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Love");
                  setEmojiSearch("");
                }}
              >
                ❤️
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Symbols");
                  setEmojiSearch("");
                }}
              >
                🔣
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Flags");
                  setEmojiSearch("");
                }}
              >
                🚩
              </button>

            </div>


            {/* SEARCH */}

            <div className="emoji-search">

              <span>
                🔍
              </span>

              <input
                type="text"
                placeholder="Search emojis"
                value={emojiSearch}
                onChange={(event) =>
                  setEmojiSearch(
                    event.target.value
                  )
                }
              />

              {emojiSearch && (

                <button
                  className="clear-search"
                  onClick={() =>
                    setEmojiSearch("")
                  }
                >
                  ×
                </button>

              )}

            </div>


            {/* SCROLLABLE EMOJI AREA */}

            <div className="emoji-scroll-area">


              {/* SEARCH RESULT */}

              {emojiSearch.trim() !== "" ? (

                <>

                  <h3>
                    Search Results
                  </h3>

                  <div className="emoji-grid">

                    {getFilteredEmojis().map(
                      (item, index) => (

                        <button
                          key={
                            item.emoji +
                            index
                          }

                          onClick={() =>
                            addEmoji(
                              item.emoji
                            )
                          }

                          title={
                            item.name
                          }
                        >
                          {item.emoji}
                        </button>

                      )
                    )}

                  </div>


                  {getFilteredEmojis()
                    .length === 0 && (

                    <div className="no-results">

                      😕 No emojis found

                    </div>

                  )}

                </>

              ) : (

                <>


                  {/* FREQUENTLY USED */}

                  <h3>
                    Frequently Used
                  </h3>

                  <div className="frequent-emojis">

                    {frequentlyUsed.map(
                      (emoji) => (

                        <button
                          key={emoji}
                          onClick={() =>
                            addEmoji(emoji)
                          }
                        >
                          {emoji}
                        </button>

                      )
                    )}

                  </div>


                  {/* CATEGORY */}

                  <h3>
                    {selectedCategory}
                  </h3>

                  <div className="emoji-grid">

                    {getFilteredEmojis().map(
                      (item, index) => (

                        <button
                          key={
                            item.emoji +
                            index
                          }

                          onClick={() =>
                            addEmoji(
                              item.emoji
                            )
                          }

                          title={
                            item.name
                          }
                        >
                          {item.emoji}
                        </button>

                      )
                    )}

                  </div>

                </>

              )}

            </div>

          </div>

        )}


        {/* ============================
            INPUT
        ============================ */}

        <div className="message-input-container">

          <input
            type="text"
            placeholder="Hi all"
            value={message}
            onChange={(event) =>
              setMessage(
                event.target.value
              )
            }
            onKeyDown={handleKeyDown}
          />


          <button
            className="emoji-button"
            onClick={() =>
              setShowEmoji(
                !showEmoji
              )
            }
          >
            ☺
          </button>


          <button
            className="send-button"
            onClick={sendMessage}
          >
            Send
          </button>

        </div>

      </main>

    </div>
  );
}

export default App;