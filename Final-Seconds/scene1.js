// scene1.js
export const scenes = {
  /* ─────────── START - Arrival at First Unity Bank Scene ─────────── */
  start: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The rain has stopped, leaving Fifth Street gleaming like polished obsidian. First Unity Bank stands before you—a monument to mid-century architectural optimism, its glass and steel facade now reflecting the red and blue strobes of emergency vehicles like a kaleidoscope of crisis.*",
        delay: 1500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Control, Reynolds—I'm in position outside First Unity Bank. The scene is... God, it's like something out of a movie. Police barriers, media vans already circling like vultures. What's our current status?",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Through the bank's large front windows, you can see movement—shadowy figures pacing behind hastily drawn blinds. The parking lot is eerily empty except for three vehicles: a beaten Honda Civic, a newer Lexus, and a silver Mercedes that seems out of place among the others.*",
        delay: 2500
      },
      {
        type: 'control',
        speaker: 'Control',
        text: "Three confirmed suspects inside, approximately eight hostages—bank employees and customers who had the misfortune of being in the wrong place at the wrong time. No shots fired yet, but we're treating this as armed and extremely dangerous.",
        delay: 2500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, before we go any further, I need you to really look at the scene. Not just what's obvious—what feels wrong? What details don't fit the pattern? You're my eyes and intuition here.",
        delay: 2000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*You study the building more carefully. The bank's electronic sign still cycles through time and temperature displays, an almost cheerful contrast to the armed standoff within. Some of the windows on the upper floors show office workers pressed against glass, watching the drama unfold below.*",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Something's off here, Reynolds. The front windows are only partially covered—if this were a planned robbery, they'd want complete privacy. And that Mercedes in the lot... it's parked perfectly between the lines while the other cars look like they were abandoned in panic.",
        delay: 3500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Excellent observation. What else? Look at the building itself, the surrounding area. Sometimes the environment tells you more about the suspects' state of mind than their words ever will.",
        delay: 2500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*The bank sits on a corner lot, surrounded by small businesses—a coffee shop called 'Java Dreams' where worried employees peer through steamed windows, an insurance office with hastily closed blinds, and a pawn shop whose neon sign flickers intermittently. The contrast between normal life and crisis creates an almost surreal atmosphere.*",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "The location bothers me too. This isn't some massive downtown branch—it's a small neighborhood bank. Not exactly Fort Knox. If you're planning a major heist, why choose a target with probably less than fifty thousand in the vault?",
        delay: 3000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "You're thinking like a profiler now. Keep going. What can you see of the suspects themselves? Movement patterns, body language—even small details matter.",
        delay: 2500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Through gaps in the window coverings, you catch glimpses of the suspects. One figure—older, wearing what looks like an expensive suit—moves with purpose and control. The others seem more agitated, their movements quick and nervous. The contrast is striking.*",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Three suspects, but they're not moving like a coordinated team. The older man in the suit—he's calm, almost casual. The younger ones look scared out of their minds. This doesn't feel like a typical robbery crew.",
        delay: 3000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Your instincts are spot on. I'm getting the same feeling from the intelligence reports. This is more complex than it appears. Are you ready to dig deeper into what we're really dealing with here?",
        delay: 2500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "As ready as someone can be for their first hostage negotiation. What's our next move, Reynolds? My heart's doing this thing where it feels like it's trying to escape my chest.",
        delay: 2500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "That's good—means you're alert. Channel that energy into focus. We have several strategic options here, and each one will give us different intelligence and set a different tone for the entire negotiation.",
        delay: 3000
      }
    ],
    choices: [
      {
        id: 'deep_observe',
        text: 'Recommend extended surveillance to understand the full psychological dynamics at play.',
        userResponse: "Emma, let's take our time and really study this situation. Extended observation might reveal the true relationship between these suspects and give us leverage points we wouldn't otherwise see.",
        nextScene: 'extendedObservation'
      },
      {
        id: 'background_intel',
        text: 'Suggest running deep background checks on the vehicles and any identifiable suspects.',
        userResponse: "Those vehicles are our best lead right now. Let's run plates, cross-reference with recent bank activity, maybe find out who we're really dealing with before we make contact.",
        nextScene: 'vehicleIntelligence'
      },
      {
        id: 'immediate_contact',
        text: 'Advise establishing communication immediately to test their response patterns.',
        userResponse: "Emma, sometimes the best intelligence comes from the first conversation. Let's make contact and see how they react—their response will tell us everything about their mental state and organization level.",
        nextScene: 'firstContact'
      },
      {
        id: 'perimeter_assessment',
        text: 'Move to assess potential entry points and escape routes they might be considering.',
        userResponse: "Before we engage, let's understand their options. If we know their potential escape routes and entry points, we can better predict their behavior and plan our approach.",
        nextScene: 'tacticalAssessment'
      }
    ]
  },

  /* ─────────── EXTENDED OBSERVATION SCENE - Extended Surveillance Uncovering the Truth ─────────── */
  extendedObservation: {
    messages: [
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*You settle into a position behind an unmarked van, using high-powered binoculars to study the scene. The afternoon sun casts long shadows through the bank's windows, creating a natural surveillance blind. Traffic has been rerouted, leaving an almost theatrical silence broken only by radio chatter and the distant hum of news helicopters.*",
        delay: 3000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Okay, I'm getting a much clearer picture now. The older suspect—he's not just calm, he's methodical. He keeps checking a folder, making notes. This isn't panic behavior, Reynolds. This is someone executing a plan.",
        delay: 3500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Interesting. What about the hostages? How are they being treated? Sometimes the suspect-hostage dynamic tells you more about ultimate intentions than anything else.",
        delay: 3000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*Through the window, you observe the hostages seated in a neat row along the far wall. They appear uncomfortable but not terrified—more like people waiting for a delayed flight than prisoners fearing for their lives. One suspect even appears to be offering water to an elderly hostage.*",
        delay: 3500
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "This is bizarre, Reynolds. The hostages look... almost relaxed? One of the younger suspects just brought the elderly woman what looks like a chair cushion. I've never seen kidnappers providing comfort amenities.",
        delay: 3500
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Emma, I think we're not dealing with traditional hostage-takers. This has the hallmarks of something else entirely. What's your gut telling you about the older suspect's motivations?",
        delay: 3000
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*As you watch, the older man approaches the bank manager's desk—you can see the nameplate 'Victoria Chen' even from this distance. He opens his folder deliberately, removing what appear to be official documents. His body language suggests this is a business meeting, not a criminal enterprise.*",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Reynolds, I don't think this is a robbery at all. The older suspect is conducting what looks like a meeting with bank management. He's got documents, he's being professional... What if this whole thing is some kind of elaborate business dispute gone wrong?",
        delay: 4000
      },
      {
        type: 'user',
        speaker: 'Reynolds',
        text: "Your observation skills are extraordinary, Emma. But if this is a business dispute, why the hostages? Why not schedule an appointment like a normal person? There's something darker here that we're not seeing yet.",
        delay: 3500
      },
      {
        type: 'narrator',
        speaker: 'Narrator',
        text: "*A movement catches your eye—the older suspect glances at his expensive watch, then toward the window where you're positioned. For a brief moment, it seems like he's looking directly at you, and there's something unsettling about his expression. Not fear or desperation, but calculation.*",
        delay: 4000
      },
      {
        type: 'agent',
        speaker: 'Emma Carter',
        text: "Oh... I think he knows we're here. And he doesn't look worried about it. Reynolds, this man is not desperate. He's patient. And that scares me more than any panicked gunman would.",
        delay: 3500
      }
    ],
    choices: [
      {
        id: 'financial_investigation',
        text: 'Launch an immediate investigation into the suspect\'s financial connections to the bank.',
        userResponse: "Emma, let's pivot to financial intelligence. If this is about business, there will be a paper trail. Let's find out what financial relationship this man has with First Unity Bank.",
        nextScene: 'financialDiscovery'
      },
      {
        id: 'make_contact',
        text: 'Establish contact now that you understand this isn\'t a traditional hostage situation.',
        userResponse: "Now that we know this isn't standard criminal behavior, let's make contact. Our approach should be professional rather than tactical—treat him like the businessman he appears to be.",
        nextScene: 'businessContact'
      },
      {
        id: 'profile_building',
        text: 'Continue observation to build a complete psychological profile before engaging.',
        userResponse: "Emma, keep watching. We need to understand not just what he's doing, but who he is. Patient, calculated individuals like this often have deeper motivations that won't be obvious until we have the complete picture.",
        waitTime: 20,
        nextScene: 'completeProfile'
      }
    ]
  }
}; 