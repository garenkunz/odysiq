// scene0.js
export const scenes = {
  /* ─────────── SCENE: Introductory Banter ─────────── */
  intro: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Control, Carter here. Sorry I'm late — just had a spirited disagreement with my coffee maker. Spoiler alert: it won.",
        delay: 1000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Glad you're finally online, Emma. The hostages didn't get the memo about coffee-related delays.",
        delay: 1500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Noted, Control. Maybe they can include that in the training manual next time. What's the situation?",
        delay: 2000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "First Unity Bank downtown, three suspects inside, multiple hostages. Situation's stable for now but tense — pretty much your standard Tuesday morning.",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Ah, my favorite kind of standard. Do we have any demands or communication yet?",
        delay: 2000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Negative on demands. Suspects are keeping quiet, hostages seem unharmed but anxious. Your call — how do you want to play this?",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Well, this isn't my first rodeo, but every bull rides differently. Suggestions, Control?",
        delay: 2000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "I'll defer to your judgment, Emma. You're the expert — what approach makes sense to you?",
        delay: 1500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Fair enough. Time to get serious. Tell me how you want this handled — I’m listening.",
        delay: 2000
      }
    ],
    choices: [
      {
        id: 'intel',
        text: 'Gather detailed intel before making contact.',
        userResponse: "Let's play it safe, Emma. Take your time, gather detailed intel first — then we make our move.",
        nextScene: 'start'
      },
      {
        id: 'comms',
        text: 'Initiate immediate communication to assess demands.',
        userResponse: "We can't afford to wait, Emma. Open a communication line immediately and get a sense of their intentions.",
        nextScene: 'start'
      },
      {
        id: 'safety',
        text: 'Prioritize securing your position and personal safety.',
        userResponse: "Safety first, Emma. Find a secure position, and we'll move forward once you're safely set up.",
        nextScene: 'start'
      }
    ]
  }
};
