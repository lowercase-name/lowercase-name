---
title: > 
    a polite stance on “ai”
description: >
    yes, this is the polite version
date: "2026-03-05"
---

you don't need me to give you a tour on all the ways "artificial intelligence" has been a net negative on society, you've been living in it for long enough. if you still think, in 2026, we're "six months away" from a.i. taking over the world, i cannot convince you.

this is, rather, a stance as it pertains to me and my work, as a writer and web developer. it's a very straightforward one:

**i will** <b>**never**</b> **use large language models. ever.** <b>**no exceptions.**</b>

not for fun, not for "project integration", not to "assist" me, not at all. this is not for merely ethical reasons, but because i have the foresight to understand this technology is a net negative on the quality i can put out of my work.

the reasons i will now list below, rather than being a complete list of issues with large language models (of which there are far more than i can ever write), are issues i would have with implementing them.

## a.i. makes for worse code & coders

consistently, evidence repeatedly shows the benefits of a.i. do not fundamentally exist. [companies do not meaningfully save money from it](https://www.theregister.com/2026/01/20/pwc_ai_ceo_survey/), even as they justify layoffs with it, and studies directly measuring performance improvements in programming show that even as people believe they perform better, [a.i. ***actively slows down*** anyone who uses them.](https://arxiv.org/abs/2507.09089)

<b>**coders who use a.i. are offloading their own logical thinking to the machine.**</b> this results in code nobody actually wrote, which makes the code harder to understand for everyone, including whoever generated it, which wastes time as someone (usually someone *else*) has to clean up after it.

if i am learning a new framework, or language, or stack, i will simply choose to tackle that head-on. i don't need something that makes it strictly harder to do so.

## a.i. won't be this cheap forever

every time anyone uses an a.i. bot, like claude, or gemini, or whatever's violating HIPAA at your local doctor's office, the company that runs the datacenter driving that machine is actively losing money.
*[HIPAA]: health insurance portability and accountability act

the price of tokens, up to and including the most expensive ones, do not reflect this cost. even in the best case scenarios, companies are usually losing a dollar for every fifty cents they make. the rest of that cost is made up in investor subsidy, in the hopes that, when these subsidies dry up, and companies need to actually make money, enough people will be locked into the a.i. ecosystem to maintain a profit anyways.

when that happens, it will become so expensive to maintain everyone's favorite "coding assistants" that it will no longer be any cheaper than simply hiring an extra hand.

<b>**it is simply irrational to rely on tools that will eventually become cost-prohibitive.**</b> when the time comes for a.i. to gatekeep everyone who can't pay up, i would rather have tools i can still maintain.

## a.i. is a security nightmare

<b>**to a large language model, there is no difference between instructions and information.**</b> as a result, if you tell one to scan a document, and it interprets something in that document as *something the a.i. must do*, it will now ignore your request in favor of doing that.

it may do this by accident, but it may also do this *as a result of intentional malignance.* [this is called prompt injection,](https://en.wikipedia.org/wiki/Prompt_injection) and it is an unfixable flaw in all models, as there is no way for the a.i. to ever fully separate the two.

this can result in [active theft of private information.](https://x.com/mbrg0/status/1953815729947447770) attempts to "patch" this flaw [can be easily circumvented,](https://hiddenlayer.com/innovation-hub/novel-universal-bypass-for-all-major-llms/) [with even mild creativity.](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/) even in scenarios where no attempt is made to hide the malicious behavior, [malicious prompts can simply be brute-forced into working with enough attempts.](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/) it is not something that can ever be meaningfully removed from the model.

even if i had no ethical concerns, under no circumstances do i plan on being held liable for implementing something so obviously dangerous to a majority of the things it comes into contact with.

## a.i. cannot improve to fix these

the large language models we refer to as "a.i." have a fundamental incorrectness, built into the fabric of how their pattern-matching works. this is because all large language models are merely guessing what a viable would response would be from likely patterns, and *likely* is not the same as *correct*. this is not unlike *machine learning*, the thing we used to call "a.i." before chatgpt showed up.

the difference is, people recognize machine learning's inherent incorrectness, and can be optimized by trading a little bit of accuracy for far more speed. machine learning algorithms, such as the ones used for speech-to-text programs, can be small and efficient enough to run entirely on your phone.

<b>**large language models, however, cannot ever be optimized.**</b> to maintain the illusion it can be something more than a tech demo, it must pretend that accuracy --- and therefore, the power, and compute, needed to be more "accurate" --- can meaningfully improve itself, meaning it can only get more expensive.

there is not enough power. there will never be enough compute. when wrongness is an encoded part of an algorithm's DNA, it cannot simply disappear by throwing all the technology in the world at it. 

## the consequences of a.i. will eat itself alive

[a.i. has gutted memory supplies.](https://www.cbc.ca/news/business/ram-shortage-consumer-electronics-9.7102991) storage, graphics cards and computer processors are being taken out of consumer hardware to instead be put in datacenters. even if the a.i. craze dies overnight, many of these supply chain decisions can't be undone until 2027, at the earliest.

for the first time in decades, <b>**we are entering an era of computing where our hardware is about to be strictly worse than it used to be.**</b> while many things can be sent to cloud computing and cloud streaming, the applications, and *web-applications*, that get you to those cloud services must still be presented in efficient fashion.

the investor-forced a.i. craze may be consuming the lives of anyone looking for an excuse to dodge doing work, but especially as we enter an age of late-zoomer vibe coders regurgitating the same bad code from a decade ago, it's going to make *being actually good at web development* all the more important.

---

i'd love to be like many people and simply ignore a.i. until a later date, because i know it will eventually pass. nothing about a technology glued together by subsidies and snake oil can hold.

unfortunately, i have this problem that many others have, wherein i need food, and housing, and i need a job that allows me to gain money for those things. once upon a time, having experience in web development would have given me a job fairly easily, but as of right now, a.i. is so stuck onto every facet of the job market that even when i find the rare job listings for non-senior developers, they're all laced with slop-ridden descriptions and broken job titles.

i have found multiple listings where whoever is working for million-dollar company couldn't even be bothered to delete the *"sure! here's your description:"* before pasting it in. these people, likely unsure how *they* can live without a chatbot, will treat me, someone who doesn't use a chatbot at all, as a worse candidate.

but when a.i. crashes, <b>**and it will,**</b> many of those same people will suddenly be at a loss to do just about anything at all, having spent three years and counting on not building or doing anything on their own. the best i can do, until then, is make it clear i've never needed it.