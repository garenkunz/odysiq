// scene2.js
export const scenes = {
  /* ─────────── SCENE: financialDiscovery - Financial Investigation Ponzi Scheme Revealed ─────────── */
  financialDiscovery: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Control patches you through to the FBI's Financial Crimes Division. Your earpiece crackles with the urgent typing of keyboards and hushed conversations. The afternoon sun slants through the bank windows at a sharper angle now, casting longer shadows that seem to hide more secrets than they reveal.*",
        delay: 3000
      },
      {
        type: 'control',
        speaker: 'Financial Analyst',
        text: "Agent Carter, this is fascinating. The Mercedes is registered to Marcus Blackwood, age 45, not 34 like we initially thought. He's not a minimum-wage worker—he's the CEO of Blackwood Capital Management.",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "CEO? Reynolds, this doesn't make sense. Why would a wealthy CEO take hostages over a frozen college fund? Unless... oh God, what if the college fund story is completely fabricated?",
        delay: 3500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, dig deeper. If he's been lying about his identity, everything else could be a lie too. What's his real connection to this bank?",
        delay: 3000
      },
      {
        type: 'control',
        speaker: 'Financial Analyst',
        text: "Get this—Blackwood Capital has been under federal investigation for three months. They're suspected of running a sophisticated Ponzi scheme using First Unity Bank as their primary money-laundering operation.",
        delay: 4000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The pieces click together in your mind like tumblers in a lock. The expensive suit, the calm demeanor, the methodical approach—this isn't desperation, it's damage control. You glanced back at the bank, where Marcus continued his 'business meeting' with Victoria Chen, and suddenly his patience makes terrifying sense.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Oh my God, Reynolds. He's not here to solve a problem—he's here to destroy evidence. The hostages aren't leverage for getting money back... they're witnesses he's trying to silence.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, if you're right, this changes everything. We're not dealing with a desperate father—we're dealing with a cornered criminal who has billions to lose and nothing left to lose. How dangerous is he?",
        delay: 3500
      },
      {
        type: 'control',
        speaker: 'Financial Analyst',
        text: "Agent Carter, there's more. Victoria Chen, the bank manager? She's been receiving monthly payments of $50,000 from Blackwood Capital for the past two years. She's not just a victim—she's a co-conspirator.",
        delay: 4000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Your blood runs cold as you realize the true scope of what you're witnessing. The 'hostage situation' is actually a high-stakes meeting between criminal partners, with innocent customers and employees trapped in the middle of their conspiracy. The afternoon shadows seem to grow darker, as if the very air around the bank is tainted with deception.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds, I think we're watching a coverup in real time. Those documents he's showing Victoria—they're not about getting money back. They're about making evidence disappear.",
        delay: 3500
      }
    ],
    choices: [
      {
        id: 'immediate_intervention',
        text: 'Recommend immediate tactical intervention to prevent evidence destruction.',
        userResponse: "Emma, we need to move now. If they're destroying evidence of a billion-dollar fraud, every second counts. Call in the tactical team.",
        nextScene: 'tacticalRush'
      },
      {
        id: 'surveillance_mode',
        text: 'Continue surveillance to gather evidence of their criminal conspiracy.',
        userResponse: "Emma, we need proof of what they're doing. Keep watching—if we can document their conspiracy, we can bring down the entire operation.",
        nextScene: 'conspiracyDocumentation'
      },
      {
        id: 'psychological_warfare',
        text: 'Use your knowledge of his true identity to apply psychological pressure.',
        userResponse: "Emma, let's call him out. He thinks we believe his sob story—let's show him we know exactly who Marcus Blackwood really is.",
        nextScene: 'identityConfrontation'
      }
    ]
  },

  /* ─────────── SCENE: businessContact - Professional Contact Meeting Marcus Blackwood ─────────── */
  businessContact: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*You approach the bank's entrance with measured steps, your reflection multiplying in the glass doors like an army of negotiators. The late afternoon light casts everything in shades of amber and shadow, giving the scene an almost cinematic quality that feels both surreal and deeply ominous.*",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "This is Agent Emma Carter, FBI. Sir, I can see you're conducting business inside. I'd like to speak with you professionally, one professional to another. Would you be willing to step outside?",
        delay: 3000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*There's a long pause. Through the window, you see the older man stop mid-sentence, his pen hovering over what appears to be a contract or legal document. His expression shifts from concentration to something harder to read—calculation mixed with what might be amusement.*",
        delay: 4000
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Agent Carter, how refreshing. Most law enforcement officers lead with threats and ultimatums. I appreciate your... civilized approach. I'm Marcus Blackwood, and yes, I am conducting rather urgent business.",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds, did you catch that? He identified himself as Marcus Blackwood, not Rodriguez. And the way he said 'urgent business'... there's something almost predatory in his tone.",
        delay: 3500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, I caught it. Run that name immediately—Marcus Blackwood. And be careful. Something about his response suggests he's in complete control of this situation, which should be impossible for a hostage-taker.",
        delay: 3500
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Agent Carter, I imagine you're wondering about the circumstances here. It's quite simple, really. I'm concluding some financial arrangements with Ms. Chen, and I needed to ensure our conversation remained... uninterrupted.",
        delay: 4000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*His choice of words sends a chill through you. 'Uninterrupted' in the context of hostages doesn't sound like desperation—it sounds like strategic planning. You notice that Victoria Chen is sitting unnaturally straight at her desk, her face pale but her eyes alert, as if she's listening to every word of your conversation.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Mr. Blackwood, I understand the importance of privacy in business matters. But surely you realize that involving innocent people as... insurance... complicates what could be a simple financial discussion?",
        delay: 3500
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Innocent? Agent Carter, that's rather naive perspective. In my experience, very few people in the financial sector are truly innocent. But I admire your diplomatic approach. Perhaps we can indeed resolve this professionally.",
        delay: 4000
      }
    ],
    choices: [
      {
        id: 'probe_deeper',
        text: 'Press him for details about the nature of his business with the bank.',
        userResponse: "Mr. Blackwood, help me understand the urgency. What kind of financial matter requires this level of... privacy?",
        nextScene: 'businessDetails'
      },
      {
        id: 'focus_hostages',
        text: 'Shift focus to the welfare of the people inside.',
        userResponse: "Mr. Blackwood, regardless of your business concerns, we need to ensure everyone inside is safe and comfortable. Can you guarantee their wellbeing?",
        nextScene: 'hostageFocus'
      },
      {
        id: 'challenge_methods',
        text: 'Diplomatically challenge his methods while maintaining respect.',
        userResponse: "I respect your need for privacy, Mr. Blackwood, but surely a man of your obvious intelligence can see that these methods will ultimately complicate rather than simplify your business affairs?",
        nextScene: 'methodChallenge'
      }
    ]
  },

  /* ─────────── SCENE: completeProfile - Complete Psychological Profile Theater of Deception ─────────── */
  completeProfile: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Twenty minutes of careful observation reveals a disturbing pattern. Marcus moves through the bank like he owns it—which, you're beginning to suspect, he might in ways that go far beyond legal ownership. The afternoon light has shifted, creating stark contrasts between light and shadow that seem to mirror the moral complexity of what you're witnessing.*",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds, I've been watching his interactions with Victoria Chen, and they're not acting like strangers. There's familiarity there—body language, the way they communicate with minimal words. This isn't a random hostage situation.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "What else, Emma? Paint me the complete picture. Sometimes patterns only emerge when you step back and see the whole canvas.",
        delay: 3000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*You notice that one of the 'hostages'—a young man in an expensive suit—keeps checking his phone and taking notes. His behavior doesn't match that of a terrified captive. In fact, he seems to be coordinating something, sending messages despite the supposed crisis situation.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds, I think some of these 'hostages' aren't hostages at all. There's a young man who's clearly part of whatever this operation is. He's not scared—he's working. This whole scenario might be theater.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, if you're right, then we need to completely reassess our approach. This isn't a negotiation—it's a performance designed to distract us from something else entirely. What's the endgame?",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*A new realization hits you as you watch Marcus methodically review documents with Victoria. Every few minutes, she stamps papers with what appears to be official bank seals. They're not just talking—they're processing transactions, signing documents, conducting actual business under the cover of a hostage situation.*",
        delay: 4500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Oh my God, Reynolds. They're using the hostage situation as cover to conduct illegal business. While we're focused on the 'crisis,' they're processing transactions, moving money, probably destroying evidence. This is the most sophisticated white-collar crime scene I've ever witnessed.",
        delay: 4500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, that's brilliant analysis. If you're correct, then every minute we spend in traditional hostage negotiation is time they're using to complete their real agenda. How do we turn the tables?",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The shadows are growing longer now, and you realize that time isn't on your side. Whatever Marcus Blackwood is really doing inside that bank, he's been methodically working toward it all afternoon. The question is whether you can stop him before he accomplishes his true objective.*",
        delay: 4000
      }
    ],
    choices: [
      {
        id: 'expose_deception',
        text: 'Confront them directly about the fraudulent hostage situation.',
        userResponse: "Emma, it's time to call their bluff. Let them know we've seen through their performance and demand to know what's really happening.",
        nextScene: 'deceptionExposed'
      },
      {
        id: 'coordinate_raid',
        text: 'Coordinate with financial crimes unit for immediate intervention.',
        userResponse: "Emma, contact financial crimes immediately. We need experts who understand white-collar crime to analyze what they're really doing in there.",
        nextScene: 'specialistIntervention'
      },
      {
        id: 'play_along',
        text: 'Continue the hostage negotiation while secretly gathering evidence.',
        userResponse: "Emma, let's play their game while we document everything. If we can get evidence of what they're really doing, we can build an airtight case.",
        nextScene: 'undercover_evidence'
      }
    ]
  },

  /* ─────────── SCENE: identityConfrontation - Identity Confrontation Exposing Marcus Blackwood ─────────── */
  identityConfrontation: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*You approach the bank's entrance with newfound confidence, your understanding of the situation completely transformed. The building no longer looks like a crime scene—it looks like a crime itself, a monument to corruption masquerading as legitimate business. The late afternoon sun casts your shadow long across the pavement, like a dark promise of the justice about to unfold.*",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Mr. Marcus Blackwood, CEO of Blackwood Capital Management, this is Agent Emma Carter. I think it's time we had an honest conversation about your business arrangements with First Unity Bank.",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The silence that follows is deafening. Through the window, you see Marcus freeze mid-signature, his expensive pen hovering over a document like a sword waiting to fall. Victoria Chen's face goes ashen, and for the first time since this began, you see genuine fear in both their expressions.*",
        delay: 4000
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Agent Carter... that's quite a leap in assumptions. I'm afraid you're mistaken about my identity. I'm simply a concerned father trying to resolve a banking error that's threatening my daughter's future.",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Your daughter Sarah, you mean? The one whose college fund was frozen? Interesting story, Marcus. Except our financial analysts can't find any record of a Sarah Blackwood, any frozen accounts, or any college fund associated with your real identity.",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, that was perfect. Watch his body language now—he's been exposed and he knows it. But be careful. Cornered criminals are the most dangerous kind.",
        delay: 3000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Marcus's demeanor shifts like a mask being removed. The concerned father act disappears, replaced by something colder and infinitely more calculating. When he speaks again, his voice carries the authority of someone accustomed to controlling multi-million dollar transactions and the lives that depend on them.*",
        delay: 4500
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Agent Carter, you're clearly more competent than your predecessor's reputation suggested. Very well. Yes, I am Marcus Blackwood. And you're correct—this isn't about a college fund. But I think you'll find that what we're actually doing here is far more... significant.",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Significant? That's an interesting word choice for what appears to be money laundering and evidence destruction. Would you care to elaborate on just how significant your criminal enterprise really is?",
        delay: 3500
      },
      {
        type: 'suspect',
        speaker: 'Marcus Blackwood',
        text: "Criminal? Agent Carter, that's rather narrow thinking. I prefer to consider myself a... financial innovator. What you call money laundering, I call creative asset management. What you call evidence destruction, I call... document reorganization.",
        delay: 4000
      }
    ],
    choices: [
      {
        id: 'demand_surrender',
        text: 'Demand immediate surrender and release of all hostages.',
        userResponse: "Mr. Blackwood, the games are over. Release everyone immediately and surrender yourself. We have enough evidence to connect you to years of financial fraud.",
        nextScene: 'surrenderDemand'
      },
      {
        id: 'negotiate_information',
        text: 'Offer to negotiate in exchange for information about the broader conspiracy.',
        userResponse: "Marcus, you're clearly not the only player in this conspiracy. Give us information about your partners and we might be able to work something out.",
        nextScene: 'informationBargain'
      },
      {
        id: 'psychological_pressure',
        text: 'Apply psychological pressure by detailing the consequences of his actions.',
        userResponse: "Marcus, you've built an empire on lies, and now it's crumbling. Every minute you continue this charade makes your situation worse. How do you think this ends for you?",
        nextScene: 'psychologicalBreaking'
      }
    ]
  }
}; 