// scene1.js
export const scenes = {
  /* ─────────── START ─────────── */
  start: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Control, do you copy? I'm in position outside the bank.",
        delay: 1000
      },
      {
        type: 'suspect',
        speaker: 'Alpha',
        text: "This is our shot. No mistakes.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Emma takes a deep breath. Nervous energy flares, then slowly eases, replaced by growing confidence in your partnership.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I'm outside First Unity Bank. We’ve got three inside – hostages appear scared but unharmed. How should we proceed?",
        delay: 3000
      }
    ],
    choices: [
      {
        id: 'observe',
        text: 'Take a moment to observe carefully first.',
        userResponse: "Emma, let’s slow down a bit and carefully observe the situation first. We need a clearer picture before taking action.",
        nextScene: 'observation'
      },
      {
        id: 'immediate_contact',
        text: 'Establish immediate communication with the suspects.',
        userResponse: "Emma, we need direct communication immediately. Reach out and see what we’re dealing with.",
        nextScene: 'firstContact'
      },
      {
        id: 'reposition',
        text: 'Move to a better tactical position before proceeding.',
        userResponse: "Before anything else, Emma, reposition to get better sight lines. Make sure you’re safe and have the best advantage.",
        nextScene: 'positioning'
      }
    ]
  },

  /* ─────────── SCENE: observation ─────────── */
  observation: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Okay, clear visual now. The oldest suspect is wearing a red cap. He’s checking his watch. Definitely under some kind of pressure.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "The younger two look uncertain, their hands trembling. They defer heavily to the older guy.",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I can do a thorough intel sweep, but that will take about fifteen minutes. Should we invest the time or act now?",
        delay: 2000
      }
    ],
    choices: [
      {
        id: 'full_intel',
        text: 'Invest time in thorough intelligence gathering.',
        userResponse: "Take your time, Emma. Gathering intel might make all the difference. Let’s play this smart.",
        waitTime: 15,
        nextScene: 'completeIntel'
      },
      {
        id: 'act_quickly',
        text: 'We have enough info; proceed immediately.',
        userResponse: "We have what we need, Emma. Time is critical—let’s proceed immediately with what we know.",
        nextScene: 'alphaConfrontation'
      }
    ]
  },

  /* ─────────── SCENE: firstContact ─────────── */
  firstContact: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Okay, going direct. 'This is the FBI—talk to me.'",
        delay: 1500
      },
      {
        type: 'suspect',
        speaker: 'Alpha',
        text: "FBI?! I didn't call for the FBI! This is supposed to be a simple negotiation!",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "He sounds confused—almost like he didn’t expect the feds. Should I press him on that?",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'pressConfusion',
        text: 'Press him on his confusion about law enforcement.',
        userResponse: "Press him on that confusion, Emma. Something doesn’t add up here.",
        nextScene: 'suspectPressure'
      },
      {
        id: 'showEmpathy',
        text: 'Show empathy and try to understand his situation.',
        userResponse: "Emma, try showing empathy. Maybe there’s more to his story.",
        nextScene: 'empathyApproach'
      }
    ]
  },

  /* ─────────── SCENE: positioning ─────────── */
  positioning: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Good thinking. I’m repositioning to get better sight lines and cover.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Okay, I’m set up with a clear vantage point. My heart rate’s actually dropping.",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Thanks for that. I was getting a bit too eager there. What’s our next move?",
        delay: 6000
      }
    ],
    choices: [
      {
        id: 'observeFromPosition',
        text: 'Use your position to gather more intel.',
        userResponse: "Perfect, Emma. Now use the vantage to gather intel.",
        nextScene: 'tacticalObservation'
      },
      {
        id: 'coordinateBackup',
        text: 'Coordinate with backup units first.',
        userResponse: "Before we proceed, coordinate with backup units, Emma. Let’s make sure everyone’s in position.",
        waitTime: 10,
        nextScene: 'teamCoordination'
      }
    ]
  },

  /* ─────────── SCENE: empathyApproach ─────────── */
  empathyApproach: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Sir, I can tell this isn’t what you expected. My name is Emma. What’s your name?",
        delay: 1500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Emma, I need to talk to Victoria Chen. She’s the bank manager. This is about my daughter.",
        delay: 7000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Now we’re getting somewhere. This isn’t a robbery—it’s personal. How should I handle this?",
        delay: 9000
      }
    ],
    choices: [
      {
        id: 'askAboutDaughter',
        text: 'Ask Marcus about his daughter.',
        userResponse: "Marcus, tell me about your daughter. What happened that brought you here?",
        nextScene: 'daughterStory'
      },
      {
        id: 'findManager',
        text: 'Locate the bank manager, Victoria Chen.',
        userResponse: "Emma, let’s help him find Victoria Chen and facilitate that conversation.",
        waitTime: 20,
        nextScene: 'managerSearch'
      }
    ]
  },

  /* ─────────── SCENE: daughterStory ─────────── */
  daughterStory: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus, tell me about your daughter. What happened?",
        delay: 1500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Sarah’s 16. The bank froze her college fund. Two jobs, Emma—do you know how hard that is?",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I understand now. A desperate dad doesn’t want hostages—he wants a solution. How should I proceed?",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'validateFeelings',
        text: 'Validate his desperation.',
        userResponse: "Marcus, I can’t imagine what you’re feeling. Any parent would do the same.",
        nextScene: 'fatherBond'
      },
      {
        id: 'offerHelp',
        text: 'Offer legal help resolving the bank issue.',
        userResponse: "We can fix this through legal channels. Let’s get Sarah’s money back the right way.",
        nextScene: 'legalResolution'
      },
      {
        id: 'focusHostages',
        text: 'Prioritize hostage safety first.',
        userResponse: "Emma, reassure Marcus you’ll keep hostages safe while we figure this out.",
        nextScene: 'prioritizeHostages'
      }
    ]
  },

  /* ─────────── SCENE: fatherBond ─────────── */
  fatherBond: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus, any parent would be furious. You just want your daughter safe.",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "He’s starting to trust me. Progress is good, but we need a resolution.",
        delay: 6000
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Victoria Chen—she knows what she did. Won’t even look at me.",
        delay: 8000
      }
    ],
    choices: [
      {
        id: 'confrontManager',
        text: 'Demand Victoria’s presence.',
        userResponse: "Emma, demand they bring Victoria Chen to the lobby NOW.",
        nextScene: 'managerConfrontation'
      },
      {
        id: 'calmHim',
        text: 'Calm Marcus down first.',
        userResponse: "Marcus, let’s stay calm. We can fix this, but we need to work together.",
        nextScene: 'calmApproach'
      }
    ]
  }

  /* ─── Add more scenes here (e.g. legalResolution, prioritizeHostages, tacticalObservation, etc.) ─── */
};
