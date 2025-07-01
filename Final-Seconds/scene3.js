// scene3.js
export const scenes = {
  /* ─────────── ENDING SCENES ─────────── */

  /* ─────────── SCENE: surrenderDemand - Final Confrontation Evidence Exposed ─────────── */
  surrenderDemand: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The standoff reaches its crescendo as the afternoon sun casts long, dramatic shadows through the bank's windows. The weight of truth hangs in the air like a storm about to break. Inside, you can see Marcus Blackwood's carefully constructed facade crumbling in real time.*",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Mr. Blackwood, the performance is over. We know about the Ponzi scheme, we know about Victoria Chen's payments, and we know this entire 'hostage situation' is theater to cover evidence destruction. Release everyone now.",
        delay: 4000
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Agent Carter, you're more thorough than I anticipated. But you're missing the bigger picture. This isn't just about Blackwood Capital—this conspiracy reaches much deeper than you can imagine.",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Through the window, you see Victoria Chen frantically shredding documents while trying to appear calm. Several of the 'hostages' are actually working at computer terminals, clearly attempting to transfer or delete digital records. The scope of their operation is staggering.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Deeper? You mean the other banks? The federal contracts? Marcus, we've been tracking this for longer than you think. Every transaction, every falsified record, every bribe—we have it all.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, that was a brilliant bluff. Watch his reaction—if he believes you have more evidence than you actually do, he might give up information to try to cut a deal.",
        delay: 3000
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Impossible. Our digital security was... but perhaps you're bluffing. No matter. Even if you arrest me today, this network will continue. I'm just one node in a much larger system.",
        delay: 4000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*His admission sends chills through the team. This isn't just a single criminal enterprise—it's part of a coordinated financial conspiracy that could involve dozens of institutions and hundreds of millions in stolen funds. The bank suddenly feels less like a crime scene and more like the tip of an iceberg.*",
        delay: 5000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus, you're right about one thing—this is bigger than just you. But here's what you're wrong about: we don't need you to tell us about the network. We need you to help us bring it down. Last chance to be part of the solution instead of the problem.",
        delay: 4500
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "You want me to betray my partners? Agent Carter, you clearly don't understand the stakes here. These people don't just ruin careers—they eliminate threats. Permanently.",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The fear in his voice is genuine now. For the first time since this began, Marcus Blackwood sounds like a man who's trapped, not in control. The realization that he might be as much a victim as a perpetrator adds a new layer of complexity to the negotiation.*",
        delay: 4500
      }
    ],
    choices: [
      {
        id: 'offer_protection',
        text: 'Offer witness protection in exchange for cooperation.',
        userResponse: "Marcus, if you help us bring down this network, we can offer you and your family complete protection. A new life, away from these people who threaten you.",
        nextScene: 'witnessProtection'
      },
      {
        id: 'expose_threats',
        text: 'Press him to reveal who\'s threatening him.',
        userResponse: "Who are these people, Marcus? Give us names, and we can protect you from them. But we need to know what we're really dealing with.",
        nextScene: 'threatExposition'
      },
      {
        id: 'tactical_intervention',
        text: 'Signal for immediate tactical team intervention.',
        userResponse: "Emma, we can't wait any longer. If there are threats against witnesses, we need to secure everyone immediately. Call in the tactical team now.",
        nextScene: 'tacticalResolution'
      }
    ]
  },

  /* ─────────── SCENE: hopeOffered - Hope Offered Sarah Gets Stanford ─────────── */
  hopeOffered: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Sarah still gets to Stanford, Marcus. We get the bank to release the funds, we get you proper legal representation, and Sarah gets her future.",
        delay: 3500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "You can really do that? Even after... all this?",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "The FBI has more pull with banks than you might think. Especially when there's clear evidence of systematic discrimination in fraud detection.",
        delay: 3000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, that's a beautiful connection. He needed to know Sarah's future is still possible. How's the room looking?",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Weapons are coming down. Marcus is crying. The nephews are moving toward the door. I think we did it, Reynolds.",
        delay: 3000
      },
      {
        type: 'system',
        speaker: 'System',
        text: "🎯 OPTIMAL RESOLUTION ACHIEVED",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "The FBI's banking crimes unit investigates the algorithm that flagged Sarah's account. Marcus serves 6 months community service. Sarah not only makes it to Stanford but receives a scholarship from a tech company impressed by her father's story. Emma Carter is promoted to Senior Negotiator.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Explore a different path',
        userResponse: "Incredible how the right words at the right moment can change everything.",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── SCENE: contemplation - Contemplation Patient Resolution ─────────── */
  contemplation: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "The waiting is killing me, but I can see Marcus having a real conversation with his nephews. This was the right call.",
        delay: 3000
      },
      {
        type: 'suspect',
        speaker: 'Nephew1',
        text: "Uncle Marcus, Agent Carter is right. Sarah needs you home, not in prison.",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "But what if the bank just stonewalls us again? What if we walk out and nothing changes?",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus, I give you my word. The FBI will personally oversee this case until Sarah's fund is released.",
        delay: 3000
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Your word... okay. Okay, everyone, we're done. Put everything down.",
        delay: 2500
      },
      {
        type: 'system',
        speaker: 'System',
        text: "🎯 PATIENT RESOLUTION ACHIEVED",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "Sometimes the best action is no action. Marcus serves 1 year, but with good behavior he's out in 8 months. The case becomes a landmark for algorithmic bias in banking. Sarah defers Stanford by one year but eventually becomes a leading advocate for AI ethics.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Try a different approach',
        userResponse: "Patience and trust—sometimes that's all it takes.",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── SCENE: urgentResolution - Urgent Resolution Swift Action ─────────── */
  urgentResolution: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus, I'm walking to my car right now. I'm going to call the bank president's personal line. But I need you to release these people first.",
        delay: 3500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "You'll really call right now? In front of us?",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Speaker phone. You'll hear every word. But these hostages have families too, Marcus. They're somebody's Sarah.",
        delay: 3000
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "You're right. Everyone go. Go home to your families. This was never about you.",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I'm dialing now, Marcus. Mr. Patterson? This is FBI Agent Carter. We have a situation that needs your immediate attention...",
        delay: 3500
      },
      {
        type: 'system',
        speaker: 'System',
        text: "🎯 SWIFT RESOLUTION ACHIEVED",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "The bank president authorizes the fund release within the hour. Marcus serves 2 years but Sarah's education is secure. Emma's quick thinking and willingness to take personal risk becomes a case study in crisis negotiation. The hostages, grateful for Emma's compassion, start a scholarship fund in her name.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Experience another ending',
        userResponse: "Sometimes you have to take risks to build trust.",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── DARKER ENDINGS ─────────── */

  /* ─────────── SCENE: pressuredDecision - Pressured Decision Escalation Event ─────────── */
  pressuredDecision: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "This is it, Marcus. Right now, this moment—you choose Sarah's future.",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Stop pressuring me! I can't think! Everyone just... stop!",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Oh no, I pushed too hard. He's spiraling. The nephews are panicking.",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Nephew2',
        text: "Uncle Marcus, we need to get out of here! Now!",
        delay: 2000
      },
      {
        type: 'system',
        speaker: 'System',
        text: "⚠️ ESCALATION EVENT",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "The pressure becomes too much. Marcus makes a desperate attempt to flee with the hostages. A struggle ensues, shots are fired. No one dies, but several people are injured. Marcus receives 8 years. Sarah's fund remains frozen throughout the legal proceedings. Emma transfers to a desk job, haunted by the what-ifs.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Learn from this outcome',
        userResponse: "Sometimes pressure breaks things instead of forging them.",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── SCENE: nephewDefection - Nephew Defection Family Division ─────────── */
  nephewDefection: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Danny, Tommy—you don't have to go down with him. Walk out now and this ends differently for you.",
        delay: 3000
      },
      {
        type: 'suspect',
        speaker: 'Nephew1',
        text: "She's right, Tommy. This isn't our fight.",
        delay: 2000
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Don't you dare abandon me! After everything I've done for your family!",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Nephew2',
        text: "Uncle Marcus, we love you, but we can't help Sarah from prison.",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Marcus is alone now. More desperate, but also... maybe more willing to listen?",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Fine. FINE! It's just me and these hostages now. But I'm not giving up on my daughter!",
        delay: 3000
      },
      {
        type: 'system',
        speaker: 'System',
        text: "⚠️ ISOLATION ACHIEVED - RISK ESCALATED",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "With his nephews gone, Marcus becomes more erratic but also more focused. The negotiation continues for 14 hours. Eventually, exhaustion wins and Marcus surrenders. His nephews receive probation, Marcus gets 5 years. Sarah defers college indefinitely. Emma questions whether dividing the family was worth the tactical advantage.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Consider other strategies',
        userResponse: "Dividing families can work tactically, but at what cost?",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── SCENE: finalStand - Final Stand Emotional Resolution ─────────── */
  finalStand: {
    messages: [
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I'm at the door, Marcus. The choice is yours. I've done everything I can.",
        delay: 2500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Wait... wait! Agent Carter!",
        delay: 2000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I'm listening, Marcus.",
        delay: 1500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "If I come out... if I surrender... will you promise me something?",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "If I can promise it, I will.",
        delay: 1500
      },
      {
        type: 'suspect',
        speaker: 'Marcus',
        text: "Promise me you'll visit Sarah at Stanford. Tell her... tell her everything I did was because I believe in her dreams.",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "I promise, Marcus. I'll tell her about a father who loved her so much he was willing to risk everything.",
        delay: 3000
      },
      {
        type: 'system',
        speaker: 'System',
        text: "🎯 EMOTIONAL RESOLUTION ACHIEVED",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "Marcus surrenders peacefully. The bank releases Sarah's funds during his trial. He serves 3 years, during which Emma visits him monthly and Sarah every semester. Upon his release, Marcus finds work with a nonprofit advocating for banking reform. Sarah graduates summa cum laude and designs fraud detection systems that account for socioeconomic bias.",
        delay: 5000
      }
    ],
    choices: [
      {
        id: 'restart',
        text: 'Reflect on this journey',
        userResponse: "Sometimes walking away gives people the space they need to make the right choice.",
        nextScene: 'gameComplete'
      }
    ]
  },

  /* ─────────── SCENE: gameComplete - Game Complete Story Finished ─────────── */
  gameComplete: {
    messages: [
      {
        type: 'system',
        speaker: 'System',
        text: "🎮 STORY COMPLETE - Thank you for guiding Emma through this complex negotiation.",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "Every choice mattered. Every word had weight. In hostage negotiation, as in life, the difference between tragedy and triumph often lies in a single moment of human connection.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, you've learned that negotiation isn't about winning—it's about understanding. You're ready for the next case.",
        delay: 3000
      }
    ],
    choices: [
      {
        id: 'playAgain',
        text: 'Play again with different choices',
        userResponse: "I'd like to explore different paths through this story.",
        nextScene: 'intro'
      },
      {
        id: 'mainMenu',
        text: 'Return to story selection',
        userResponse: "That was incredible. Time to explore other stories.",
        nextScene: 'exitToMain'
      }
    ]
  },

  /* ─────────── SCENE: exitToMain - Exit to Main Story Selection ─────────── */
  exitToMain: {
    messages: [
      {
        type: 'system',
        speaker: 'System',
        text: "Returning to main story selection...",
        delay: 1000
      }
    ],
    choices: [
      {
        id: 'exit',
        text: 'Continue',
        userResponse: "Thanks for an amazing experience.",
        nextScene: 'redirectToMain'
      }
    ]
  }
}; 