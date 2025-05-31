// scene0.js
export const scenes = {
  /* ─────────── SCENE: Introductory Banter ─────────── */
  intro: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Control, this is Carter. Apologies for the delay—minor disagreement with my coffee machine this morning.",
        delay: 1000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Glad you could join us, Emma. Hostage negotiation waits for no coffee.",
        delay: 1500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Point taken. Brief me quickly—I assume we're dealing with more than a misunderstanding over an overdraft fee?",
        delay: 2000
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "First Unity Bank, three suspects, multiple hostages. Seems tense but contained. Your usual kind of Tuesday.",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Understood. I'll head straight there. Anything specific you want me to prioritize upon arrival?",
        delay: 2000
      }
    ],
    choices: [
      {
        id: 'intel',
        text: 'Prioritize gathering intel on arrival.',
        userResponse: "Intel first, Emma. The clearer our picture, the better we can handle it.",
        nextScene: 'start'
      },
      {
        id: 'comms',
        text: 'Establish immediate lines of communication.',
        userResponse: "Open communication as soon as possible, Emma. Direct contact could prevent escalation.",
        nextScene: 'start'
      },
      {
        id: 'safety',
        text: 'Ensure your own safety first, then assess.',
        userResponse: "Safety is paramount, Emma. Secure your position before anything else.",
        nextScene: 'start'
      }
    ]
  }
};
