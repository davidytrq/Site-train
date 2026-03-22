// AI Sport Trainer - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startBtn = document.getElementById('startBtn');
    const workoutGrid = document.getElementById('workoutGrid');
    const coachMessage = document.getElementById('coachMessage');
    const mainCoach = document.querySelector('.coach-character');
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const stats = {
        calories: document.getElementById('calories'),
        minutes: document.getElementById('minutes'),
        workouts: document.getElementById('workouts')
    };
    
    // AI Coach Messages
    const coachMessages = [
        "Hey! Ready to crush your goals? 🚀",
        "Let's get moving! What's your goal today?",
        "You've got this! I'm here to guide you.",
        "Every rep counts. Keep pushing!",
        "Form over everything. Focus on technique!",
        "Hydrate! Water is your best friend.",
        "Believe in the process. Results take time.",
        "You're stronger than you think! 💪",
        "Rest is part of training too. Don't skip it!",
        "Today's effort is tomorrow's strength!"
    ];
    
    // Workout Data
    const workouts = [
        { 
            name: "HIIT Blast", 
            desc: "20-min high intensity interval training", 
            img: "https://source.unsplash.com/featured/400x300/?hiit,workout",
            type: "hiit"
        },
        { 
            name: "Yoga Flow", 
            desc: "15-min flexibility and balance session", 
            img: "https://source.unsplash.com/featured/400x300/?yoga,stretch",
            type: "yoga"
        },
        { 
            name: "Strength Builder", 
            desc: "25-min full body strength routine", 
            img: "https://source.unsplash.com/featured/400x300/?strength,training",
            type: "strength"
        },
        { 
            name: "Cardio Burn", 
            desc: "30-min endurance workout", 
            img: "https://source.unsplash.com/featured/400x300/?cardio,running",
            type: "cardio"
        },
        { 
            name: "Core Crusher", 
            desc: "10-min intense core workout", 
            img: "https://source.unsplash.com/featured/400x300/?abs,core",
            type: "core"
        },
        { 
            name: "Mobility Work", 
            desc: "10-min joint mobility routine", 
            img: "https://source.unsplash.com/featured/400x300/?mobility,flexibility",
            type: "mobility"
        }
    ];
    
    // Animation Functions
    function animateCoach() {
        // Head bounce
        const head = mainCoach.querySelector('.coach-head');
        head.style.animation = 'bounce 1s infinite';
        
        // Body wave
        const body = mainCoach.querySelector('.coach-body');
        body.style.animation = 'wave 1.5s infinite';
        
        // Bubble pulse
        coachMessage.style.animation = 'pulse 2s infinite';
    }
    
    // Load Workouts
    function loadWorkouts() {
        workoutGrid.innerHTML = '';
        workouts.forEach((workout, index) => {
            const card = document.createElement('div');
            card.className = 'workout-card';
            card.innerHTML = `
                <img src="${workout.img}" alt="${workout.name}">
                <div class="workout-info">
                    <h3>${workout.name}</h3>
                    <p>${workout.desc}</p>
                </div>
            `;
            
            // Add click event
            card.addEventListener('click', () => {
                startWorkout(workout);
                animateCoach();
                showCoachMessage(`Let's do ${workout.name}! ${getRandomTip(workout.type)}`);
            });
            
            workoutGrid.appendChild(card);
            
            // Staggered animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Start Workout
    function startWorkout(workout) {
        // Update stats
        stats.workouts.textContent = parseInt(stats.workouts.textContent) + 1;
        stats.minutes.textContent = parseInt(stats.minutes.textContent) + 
            (workout.desc.match(/(\d+)-min/) ? parseInt(workout.desc.match(/(\d+)-min/)[1]) : 20);
        
        // Add to chat
        addChatMessage(`Starting ${workout.name}...`, 'ai');
        addChatMessage(`${workout.desc}`, 'ai');
        
        // Simulate workout timer (in real app, this would be a proper timer)
        setTimeout(() => {
            const caloriesBurned = Math.floor(Math.random() * 100) + 50;
            stats.calories.textContent = parseInt(stats.calories.textContent) + caloriesBurned;
            addChatMessage(`Great job! You burned approximately ${caloriesBurned} calories.`, 'ai');
            addChatMessage(`Want another workout or need form tips?`, 'ai');
        }, 3000); // Simulate 3 second workout
    }
    
    // Chat Functions
    function addChatMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.textContent = message;
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Animate new message
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 10);
    }
    
    function showCoachMessage(message) {
        coachMessage.textContent = message;
        // Reset animation
        coachMessage.style.animation = 'none';
        setTimeout(() => {
            coachMessage.style.animation = 'pulse 2s infinite';
        }, 10);
    }
    
    // Get random tip based on workout type
    function getRandomTip(type) {
        const tips = {
            hiit: ["Remember: explosive movements, controlled landings!", "Keep your core tight during burpees!"],
            yoga: ["Breathe deeply into each stretch.", "Focus on your alignment, not how far you can go."],
            strength: ["Control the weight both up and down.", "Squeeze at the top of each movement!"],
            cardio: ["Maintain a steady pace you can talk through.", "Land softly to protect your joints."],
            core: ["Pull your belly button towards your spine.", "Don't pull on your neck during crunches."],
            mobility: ["Move slowly through each range of motion.", "Breathe into any tight spots you feel."]
        };
        
        const typeTips = tips[type] || ["Stay consistent and enjoy the process!"];
        return typeTips[Math.floor(Math.random() * typeTips.length)];
    }
    
    // Event Listeners
    startBtn.addEventListener('click', () => {
        // Random workout suggestion
        const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
        startWorkout(randomWorkout);
        animateCoach();
        showCoachMessage(`How about ${randomWorkout.name}? ${getRandomTip(randomWorkout.type)}`);
    });
    
    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addChatMessage(message, 'user');
            userInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const responses = [
                    "That's a great question! Let me break it down for you...",
                    "Based on your goals, I'd recommend focusing on...",
                    "Here's what the research says about that...",
                    "Try this approach and see how it feels...",
                    "Interesting point! Have you considered...?",
                    "Let me create a custom tip for that situation...",
                    "That's a common concern - here's how to handle it...",
                    "You're asking exactly the right questions!"
                ];
                
                addChatMessage(responses[Math.floor(Math.random() * responses.length)], 'ai');
                
                // Sometimes give a specific tip
                if (Math.random() > 0.7) {
                    setTimeout(() => {
                        addChatMessage(`Pro tip: ${getRandomTip(Object.keys(tips)[Math.floor(Math.random() * Object.keys(tips.length))])}`, 'ai');
                    }, 1500);
                }
            }, 1000);
        }
    });
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    // Initialize
    function init() {
        // Set initial state
        stats.calories.textContent = '0';
        stats.minutes.textContent = '0';
        stats.workouts.textContent = '0';
        
        // Load workouts
        loadWorkouts();
        
        // Animate coach on load
        setTimeout(animateCoach, 500);
        
        // Initial coach message
        setTimeout(() => {
            showCoachMessage("Hey! I'm your AI trainer. Let's get you fit! 💪");
        }, 1000);
        
        // Add background elements
        addBackgroundElements();
        
        // Focus input
        userInput.focus();
    }
    
    function addBackgroundElements() {
        const container = document.createElement('div');
        container.className = 'background-elements';
        
        for (let i = 0; i < 8; i++) {
            const dot = document.createElement('div');
            dot.className = 'background-dot';
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.width = `${Math.random() * 30 + 10}px`;
            dot.style.height = dot.style.width;
            dot.style.animationDelay = `-${Math.random() * 15}s`;
            container.appendChild(dot);
        }
        
        document.body.appendChild(container);
    }
    
    // Start the app
    init();
});

// CSS Animations (injected via JS to avoid CSS bloat)
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(10deg); }
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
    
    .chat-message {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .workout-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;
document.head.appendChild(style);
// Updated JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Toggle
  const darkModeBtn = document.getElementById('darkModeBtn');
  const theme = localStorage.getItem('theme') || 'light';
  
  document.body.dataset.theme = theme;
  
  darkModeBtn.addEventListener('click', () => {
    document.body.dataset.theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', document.body.dataset.theme);
  });
  
  // AI Helper Interaction
  const aiHelper = document.getElementById('aiHelper');
  const aiMessage = document.getElementById('aiMessage');
  
  aiHelper.addEventListener('click', () => {
    aiMessage.textContent = 'Ready to help you crush your goals! 💪';
    aiHelper.style.animation = 'pulse 1s infinite';
    
    setTimeout(() => {
      aiMessage.textContent = 'Hey! I'm your AI trainer. Let\'s get moving!';
      aiHelper.style.animation = 'none';
    }, 2000);
  });
  
  // Initialize
  document.getElementById('startBtn').click();
});
