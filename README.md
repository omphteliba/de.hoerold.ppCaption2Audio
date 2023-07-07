# ppCaption2Audio

![ppCaption2Audio Logo](./assets/oliver_hoerold_Imagine_a_title_image_that_creatively_represents_149b906c-6846-4293-b3f0-84cfdf0c4a49.png)

Greetings! Welcome to the jumble of code we like to call 'ppCaption2Audio'. I'm glad to see your brave spirit has led you here! Don't worry, it's not as bad as it sounds. I mean, I'm still here, right? ... Right?

## What is it?

ppCaption2Audio is like the Babel fish from Hitchhiker's Guide to the Galaxy. Except, instead of translating alien languages to English for you (we're still working on that in a parallel universe), it takes a caption from your Adobe Premiere Pro project, translates it to English (or any other human language we've managed to cram into this thing), and generates a new audio track from the translated caption. This beast is an Adobe Premiere Pro extension that takes the "silent" out of "silent film"!

## Features

1. **Translation**: Our sophisticated, extremely intelligent, and in no way unpredictable translation algorithm turns any input language into any output language faster than you can say "Why is this README so sarcastically weird?"

2. **Audio Generation**: After translation, ppCaption2Audio will instantly create an audio track. It's basically like having an AI voice actor on retainer. Think Siri, but with less attitude and a much lower paycheck.

3. **Adobe Premiere Pro Integration**: We managed to make our code play nicely with Adobe's. We're not sure how, but it's probably magic.


## How It Works

Our sophisticated system of very technical wizardry follows a rigorous 9-step process to ensure that your captions are not just translated, but transformed into high-quality audio:

1. **Select the language**: Choose the language for the final audio. We offer a wide selection. Yes, even Klingon (well, not really, but we're working on it).

2. **Select the sequence**: Choose the sequence that contains the caption you want to translate.

3. **Choose your caption**: If your sequence is like a novel with multiple captions, choose the one you want to translate.

4. **Export the caption**: We'll help you export the caption as an SRT file. This may sound complex, but we promise it's as easy as pie (and just as satisfying).

5. **Translate with DeepL**: Our tool uses DeepL to translate the caption into your chosen language. Yes, it's DeepL, as in "Deep Learning", not "Deep Sea Diving".

6. **Save the translated caption**: The translated caption is saved. Somewhere safe, we promise. 

7. **Chop it up by timecode**: We then slice and dice the translated caption by timecode. Don't worry, no captions were harmed in the making of this software.

8. **Generate new audio with 11labs**: The chopped up captions are sent to 11labs (not a secret government facility, but an AI speech synthesis system) to generate the new audio.

9. **Insert new audio into Premiere Pro sequence**: The new audio snippets are inserted into the Premiere Pro sequence at the exact timecode of the original caption. Voilà, your sequence can now speak a new language!

## Configuration

Before using ppCaption2Audio, you'll need to provide the following API keys:

- **DeepL API Key**: Required to communicate with the DeepL Translation system.
- **11labs API Key**: Needed for the 11labs text-to-speech system.

Don't worry, we've made the process of adding these keys as simple as possible. Just follow the prompts when you first run the application.

All temporary files created during the translation and audio creation process are conveniently saved in a `ppcaption2audio` folder in your user's Documents folder. We'll even create subfolders by date and sequence name to keep things organized for you. Because who doesn't love a bit of order in the chaos?

## How to Use

1. **Download and Install**: Click on the download button (if you can't find it, your adventure ends here) and follow the prompts to install. You may have to click 'Next' more than once (our condolences for the hard work).

    Here are the paths where you should install the extension:

    #### System extension folder
    - **Win(x86)**: `C:\Program Files\Common Files\Adobe\CEP\extensions`
    - **Win(x64)**: `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`, and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)
    - **Mac**: `/Library/Application Support/Adobe/CEP/extensions`
    
    #### Per-user extension folder
    - **Win**: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`
    - **Mac**: `~/Library/Application Support/Adobe/CEP/extensions`

2. **Choose Your Caption**: Open your project in Adobe Premiere Pro, select your caption file, take a deep breath, and pray to the code gods that everything goes as expected.

3. **Translate and Generate**: Select the target language and press 'Translate'. The audio track will be generated faster than you can say "Open-source code is a beautiful disaster". And voila! Your silent film now has sound, in a language possibly different from the original one. 

## Contribute

We love contributions! Especially if they come with chocolates. However, if you can't afford to send chocolates, your code will do just fine. Check out `CONTRIBUTING.md` for guidelines on how to make this chaotic masterpiece even more chaotic... or maybe even a masterpiece?

## License

ppCaption2Audio is [MIT licensed](./LICENSE). Not sure why you'd want to copy this mess, but we're flattered all the same.

## Questions

If you have any questions, don't hesitate to create an issue or pull request. Or, if you're really desperate, try asking your Magic 8 Ball. It might have better answers.

