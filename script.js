
        const favorites = [];
        let debounceTimer;

        // Load favorites from cookies on page load
        document.addEventListener('DOMContentLoaded', () => {
            loadFavoritesFromCookies();
            generateStylishText();
        });

        // Input event listener
        document.getElementById('inputText').addEventListener('input', function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                generateStylishText();
            }, 1);
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Select all buttons with the 'copy-button' class
            const copyButtons = document.querySelectorAll('.copy-button');

            copyButtons.forEach(button => {
                // Create the SVG element
                const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svgIcon.setAttribute("width", "16");
                svgIcon.setAttribute("height", "16");
                svgIcon.setAttribute("fill", "currentColor");
                svgIcon.classList.add("bi", "bi-copy");
                svgIcon.setAttribute("viewBox", "0 0 16 16");

                // Add the <path> inside the SVG
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("fill-rule", "evenodd");
                path.setAttribute("d",
                    "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                    );

                svgIcon.appendChild(path);

                // Insert the SVG icon before the button text
                button.insertBefore(svgIcon, button.firstChild);
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Select all buttons with the 'favorite-button' class
            const favoriteButtons = document.querySelectorAll('.favorite-button');

            favoriteButtons.forEach(button => {
                // Create the SVG element
                const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svgIcon.setAttribute("width", "16");
                svgIcon.setAttribute("height", "16");
                svgIcon.setAttribute("fill", "currentColor");
                svgIcon.classList.add("bi", "bi-star");
                svgIcon.setAttribute("viewBox", "0 0 16 16");

                // Add the <path> inside the SVG
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d",
                    "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                    );

                svgIcon.appendChild(path);

                // Insert the SVG icon before the button text
                button.insertBefore(svgIcon, button.firstChild);

                // Add a space after the SVG icon
                const space = document.createTextNode(" ");
                button.insertBefore(space, svgIcon.nextSibling);
            });
        });

   

        // Generate stylish text
        function generateStylishText() {
            const inputText = document.getElementById('inputText').value;

            document.getElementById('outputTextOldEnglish').innerText = inputText.split('').map(getOldEnglishChar).join(
                '');
            document.getElementById('outputTextMedieval').innerText = inputText.split('').map(getMedievalChar).join('');
            document.getElementById('outputTextDoubleStruck').innerText = inputText.split('').map(getDoubleStruckChar)
                .join('');
            document.getElementById('outputTextItalic').innerText = inputText.split('').map(getItalicChar).join('');
            document.getElementById('outputTextBold').innerText = inputText.split('').map(getBoldChar).join('');
            document.getElementById('outputTextCursive').innerText = inputText.split('').map(getCursiveChar).join('');
            document.getElementById('outputTextSquare').innerText = inputText.split('').map(getSquareChar).join('');
            document.getElementById('outputTextSquaredLatin').innerText = inputText.split('').map(getSquaredLatinChar)
                .join('');
            document.getElementById('outputTextAncient').innerText = inputText.split('').map(getAncientChar).join('');
            document.getElementById('outputTextWide').innerText = inputText.split('').map(getWideChar).join('');
            document.getElementById('outputTextReverseMirror').innerText = inputText.split('').map(getReverseMirrorChar)
                .join('');
            document.getElementById('outputTextUnderlined').innerText = inputText.split('').map(getUnderlinedChar).join(
                '');
            document.getElementById('outputTextDarkBubble').innerText = inputText.split('').map(getDarkBubbleChar).join(
                '');
            document.getElementById('outputTextBubbles').innerText = inputText.split('').map(getBubblesChar).join('');
            document.getElementById('outputTextStrikeThrough').innerText = inputText.split('').map(getStrikeThroughChar)
                .join('');
            document.getElementById('outputTextBigRussian').innerText = inputText.split('').map(getBigRussianChar).join(
                '');
            document.getElementById('outputTextAsianFusion').innerText = inputText.split('').map(getAsianFusionChar)
                .join('');
            document.getElementById('outputTextMythical').innerText = inputText.split('').map(getMythicalChar).join('');
            document.getElementById('outputTextAlpha').innerText = inputText.split('').map(getAlphaChar).join('');
            document.getElementById('outputTextLiner').innerText = inputText.split('').map(getLinerChar).join('');
            document.getElementById('outputTextEcho').innerText = inputText.split('').map(getEchoChar).join('');
            document.getElementById('outputTextElegant').innerText = inputText.split('').map(getElegantChar).join('');
            document.getElementById('outputTextStarsMid').innerText = inputText.split('').map(getStarsMidChar).join('');
            document.getElementById('outputTextSuperScript').innerText = inputText.split('').map(getSuperScriptChar)
                .join('');
            document.getElementById('outputTextSubScript').innerText = inputText.split('').map(getSubScriptChar).join(
                '');
            document.getElementById('outputTextBoldItalic').innerText = inputText.split('').map(getBoldItalicChar).join(
                '');
            document.getElementById('outputTextAgeOld').innerText = inputText.split('').map(getAgeOldChar).join('');
            document.getElementById('outputTextDotJoiner').innerText = inputText.split('').map(getDotJoinerChar).join(
                '');
            document.getElementById('outputTextShade').innerText = inputText.split('').map(getShadeChar).join('');
            document.getElementById('outputTextCrossAbove').innerText = inputText.split('').map(getCrossAboveChar).join(
                '');
            document.getElementById('outputTextCorner').innerText = inputText.split('').map(getCornerChar).join('');
            document.getElementById('outputTextSquiggle').innerText = inputText.split('').map(getSquiggleChar).join('');
            document.getElementById('outputTextWave').innerText = inputText.split('').map(getWaveJoinerChar).join('');
            document.getElementById('outputTextWhite').innerText = inputText.split('').map(getWhiteParenthesisChar)
                .join('');
            document.getElementById('outputTextBullet').innerText = inputText.split('').map(getBulletJoinChar).join('');
            document.getElementById('outputTextArrow').innerText = inputText.split('').map(getArrowJoinerChar).join('');
            document.getElementById('outputTextSlashed').innerText = inputText.split('').map(getSlashedChar).join('');
            document.getElementById('outputTextFlorette').innerText = inputText.split('').map(getBlackFloretteChar)
                .join('');
            document.getElementById('outputTextSeparatorBlock').innerText = inputText.split('').map(
                getLineSeparatorBlockChar).join('');
            document.getElementById('outputTextLowLine').innerText = inputText.split('').map(getLowLineChar).join('');
            document.getElementById('outputTextDoubleMacron').innerText = inputText.split('').map(getDoubleMacronChar)
                .join('');
            document.getElementById('outputTextDoubleUnderline').innerText = inputText.split('').map(
                getDoubleUnderlineChar).join('');
            document.getElementById('outputTextTildeStrikeThrough').innerText = inputText.split('').map(
                getTildeStrikeThroughChar).join('');
            document.getElementById('outputTextSlashThrough').innerText = inputText.split('').map(getSlashThroughChar)
                .join('');
            document.getElementById('outputTextTopBottom').innerText = inputText.split('').map(getTopBottomChar).join(
                '');
            document.getElementById('outputTextDoubleOverline').innerText = inputText.split('').map(
                getDoubleOverlineChar).join('');
            document.getElementById('outputTextArrowUnderline').innerText = inputText.split('').map(
                getArrowUnderlineChar).join('');
            document.getElementById('outputTextStrange').innerText = inputText.split('').map(getStrangeLookChar).join(
                '');
            document.getElementById('outputTextZombies').innerText = inputText.split('').map(getZombiesChar).join('');
            document.getElementById('outputTextCreepy').innerText = inputText.split('').map(getCreepyChar).join('');
            document.getElementById('outputTextMysterious').innerText = inputText.split('').map(getMysteriousChar).join(
                '');
            document.getElementById('outputTextBizarre').innerText = inputText.split('').map(getBizarreChar).join('');
            document.getElementById('outputTextGlitch').innerText = inputText.split('').map(getGlitchChar).join('');
            document.getElementById('outputTextHalloween').innerText = inputText.split('').map(getHalloweenChar).join(
                '');
            document.getElementById('outputTextFreaky').innerText = inputText.split('').map(getFreakyChar).join('');
            document.getElementById('outputTextScratch').innerText = inputText.split('').map(getScratchChar).join('');
            document.getElementById('outputTextDoodle').innerText = inputText.split('').map(getDoodleChar).join('');
            document.getElementById('outputTextPencil').innerText = inputText.split('').map(getPencilChar).join('');
            document.getElementById('outputTextScribble').innerText = inputText.split('').map(getScribbleChar).join('');
            document.getElementById('outputTextCurlicue').innerText = inputText.split('').map(getCurlicueChar).join('');
            document.getElementById('outputTextdrawn').innerText = inputText.split('').map(getdrawnChar).join('');
            document.getElementById('outputTextSurrounded').innerText = inputText.split('').map(getSurroundedChar).join(
                '');
            document.getElementById('outputTextFenced').innerText = inputText.split('').map(getFencedChar).join('');
            document.getElementById('outputTextThickBox').innerText = inputText.split('').map(getThickBoxChar).join('');
            document.getElementById('outputTextIntegral').innerText = inputText.split('').map(getIntegralChar).join('');
            document.getElementById('outputTextMoon').innerText = inputText.split('').map(getMoonChar).join('');
            document.getElementById('outputTextTibetan').innerText = inputText.split('').map(getTibetanChar).join('');
            document.getElementById('outputTextBrackets').innerText = inputText.split('').map(getBracketChar).join('');
            document.getElementById('outputTextHoused').innerText = inputText.split('').map(getHousedChar).join('');
            document.getElementById('outputTextFountain').innerText = inputText.split('').map(getFountainChar).join('');
            document.getElementById('outputTextPrettified').innerText = inputText.split('').map(getPrettifiedChar).join(
                '');
            document.getElementById('outputTextStarLined').innerText = inputText.split('').map(getStarLinedChar).join(
                '');
            const RectanglesidefadeText = inputText.split('').map(getRectanglesidefadeChar).join('');
            document.getElementById('outputTextRectanglesidefade').innerText =
                `█▓▒­░⡷⠂ ${RectanglesidefadeText}  ⠐⢾░▒▓█ `;
            const QuotationText = inputText.split('').map(getQuotationChar).join('');
            document.getElementById('outputTextQuotation').innerText = `❝ ${QuotationText} ❞ `;
            const styledText = inputText.split('').map(getCutenotesChar).join('');
            document.getElementById('outputTextCutenotes').innerText = `⁺˚⋆｡°✩ ${styledText} ✩°｡⋆˚⁺`;
            const SuperFrogText = inputText.split('').map(getSuperFrogChar).join('');
            document.getElementById('outputTextSuperFrog').innerText = `▄︻デ♬ ${SuperFrogText} ♣══━一`;
            const LovedropsText = inputText.split('').map(getLovedropsChar).join('');
            document.getElementById('outputTextLovedrops').innerText = `˚₊· ͟͟͞͞➳❥ ${LovedropsText} 𖨆♡𖨆 `;
            const ButterflyText = inputText.split('').map(getButterflyChar).join('');
            document.getElementById('outputTextButterfly').innerText = `ʚïɞ𓆩♡𓆪 ${ButterflyText} 𓆩♡𓆪 ཐིཋྀ `;
            const CutiePieText = inputText.split('').map(getCutiePieChar).join('');
            document.getElementById('outputTextCutiePie').innerText = `(◍•ᴗ•◍) ${CutiePieText} ෴❤️෴  `;
            const unblockedText = inputText.split('').map(getunblockedChar).join('');
            document.getElementById('outputTextunblocked').innerText = `▞▞▞ ${unblockedText}  ▞▞▞ `;

        }


        // Function to copy text to clipboard
        function copyText(id) {
            const text = document.getElementById(id).innerText;
            navigator.clipboard.writeText(text).then(() => {
                const popup = document.getElementById('copyPopup');
                popup.style.display = 'block';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 1000); // Display 'Copied!' popup for 1 second
            }).catch(err => console.error('Failed to copy text: ', err));
        }

        // Function to add text to favorites
        function addToFavorites(id) {
            const text = document.getElementById(id).innerText;
            if (!favorites.includes(text)) {
                favorites.push(text);
                setCookie('favorites', JSON.stringify(favorites), 5); // Set cookie for 5 minutes
                const popup = document.getElementById('favoritePopup');
                popup.style.display = 'block';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 1000); // Display 'Added to Favorites' popup for 1 second
            }
        }

        // Function to show the favorites modal
        function showFavoritesModal() {
            const modal = document.getElementById('favoritesModal');
            const overlay = document.getElementById('modalOverlay');
            const list = document.getElementById('favoritesList');
            list.innerHTML = favorites.length ? favorites.map(font => `<li>${font}</li>`).join('') :
                '<li>No favorite fonts yet.</li>';
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }

        // Function to close the favorites modal
        function closeFavoritesModal() {
            document.getElementById('favoritesModal').style.display = 'none';
            document.getElementById('modalOverlay').style.display = 'none';
        }

        // Function to set a cookie
        function setCookie(name, value, minutes) {
            const date = new Date();
            date.setTime(date.getTime() + (12 * 60 * 1000)); // Convert minutes to milliseconds
            const expires = "expires=" + date.toUTCString();
            document.cookie = `${name}=${value};${expires};path=/`;
        }

        // Function to get a cookie
        function getCookie(name) {
            const nameEQ = `${name}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Function to load favorites from cookies
        function loadFavoritesFromCookies() {
            const favoritesCookie = getCookie('favorites');
            if (favoritesCookie) {
                const savedFavorites = JSON.parse(favoritesCookie);
                savedFavorites.forEach(font => {
                    if (!favorites.includes(font)) {
                        favorites.push(font);
                    }
                });
            }
        }

        function getOldEnglishChar(char) {
            const oldEnglishChars = {
                'a': '𝔞',
                'b': '𝔟',
                'c': '𝔠',
                'd': '𝔡',
                'e': '𝔢',
                'f': '𝔣',
                'g': '𝔤',
                'h': '𝔥',
                'i': '𝔦',
                'j': '𝔧',
                'k': '𝔨',
                'l': '𝔩',
                'm': '𝔪',
                'n': '𝔫',
                'o': '𝔬',
                'p': '𝔭',
                'q': '𝔮',
                'r': '𝔯',
                's': '𝔰',
                't': '𝔱',
                'u': '𝔲',
                'v': '𝔳',
                'w': '𝔴',
                'x': '𝔵',
                'y': '𝔶',
                'z': '𝔷',
                'A': '𝔄',
                'B': '𝔅',
                'C': 'ℭ',
                'D': '𝔇',
                'E': '𝔈',
                'F': '𝔉',
                'G': '𝔊',
                'H': 'ℌ',
                'I': 'ℑ',
                'J': '𝔍',
                'K': '𝔎',
                'L': '𝔏',
                'M': '𝔐',
                'N': '𝔑',
                'O': '𝔒',
                'P': '𝔓',
                'Q': '𝔔',
                'R': 'ℜ',
                'S': '𝔖',
                'T': '𝔗',
                'U': '𝔘',
                'V': '𝔙',
                'W': '𝔚',
                'X': '𝔛',
                'Y': '𝔜',
                'Z': 'ℨ'
            };
            return oldEnglishChars[char] || char;
        }

        function getMedievalChar(char) {
            const medievalChars = {
                'a': '𝖆',
                'b': '𝖇',
                'c': '𝖈',
                'd': '𝖉',
                'e': '𝖊',
                'f': '𝖋',
                'g': '𝖌',
                'h': '𝖍',
                'i': '𝖎',
                'j': '𝖏',
                'k': '𝖐',
                'l': '𝖑',
                'm': '𝖒',
                'n': '𝖓',
                'o': '𝖔',
                'p': '𝖕',
                'q': '𝖖',
                'r': '𝖗',
                's': '𝖘',
                't': '𝖙',
                'u': '𝖚',
                'v': '𝖛',
                'w': '𝖜',
                'x': '𝖝',
                'y': '𝖞',
                'z': '𝖟',
                'A': '𝕬',
                'B': '𝕭',
                'C': '𝕮',
                'D': '𝕯',
                'E': '𝕰',
                'F': '𝕱',
                'G': '𝕲',
                'H': '𝕳',
                'I': '𝕴',
                'J': '𝕵',
                'K': '𝕶',
                'L': '𝕷',
                'M': '𝕸',
                'N': '𝕹',
                'O': '𝕺',
                'P': '𝕻',
                'Q': '𝕼',
                'R': '𝕽',
                'S': '𝕾',
                'T': '𝕿',
                'U': '𝖀',
                'V': '𝖁',
                'W': '𝖂',
                'X': '𝖃',
                'Y': '𝖄',
                'Z': '𝖅'
            };
            return medievalChars[char] || char;
        }

        function getDoubleStruckChar(char) {
            const doubleStruckChars = {
                'a': '𝕒',
                'b': '𝕓',
                'c': '𝕔',
                'd': '𝕕',
                'e': '𝕖',
                'f': '𝕗',
                'g': '𝕘',
                'h': '𝕙',
                'i': '𝕚',
                'j': '𝕛',
                'k': '𝕜',
                'l': '𝕝',
                'm': '𝕞',
                'n': '𝕟',
                'o': '𝕠',
                'p': '𝕡',
                'q': '𝕢',
                'r': '𝕣',
                's': '𝕤',
                't': '𝕥',
                'u': '𝕦',
                'v': '𝕧',
                'w': '𝕨',
                'x': '𝕩',
                'y': '𝕪',
                'z': '𝕫',
                'A': '𝔸',
                'B': '𝔹',
                'C': 'ℂ',
                'D': '𝔻',
                'E': '𝔼',
                'F': '𝔽',
                'G': '𝔾',
                'H': 'ℍ',
                'I': '𝕀',
                'J': '𝕁',
                'K': '𝕂',
                'L': '𝕃',
                'M': '𝕄',
                'N': 'ℕ',
                'O': '𝕆',
                'P': 'ℙ',
                'Q': 'ℚ',
                'R': 'ℝ',
                'S': '𝕊',
                'T': '𝕋',
                'U': '𝕌',
                'V': '𝕍',
                'W': '𝕎',
                'X': '𝕏',
                'Y': '𝕐',
                'Z': 'ℤ'
            };
            return doubleStruckChars[char] || char;
        }

        function getItalicChar(char) {
            const italicChars = {
                'a': '𝘢',
                'b': '𝘣',
                'c': '𝘤',
                'd': '𝘥',
                'e': '𝘦',
                'f': '𝘧',
                'g': '𝘨',
                'h': '𝘩',
                'i': '𝘪',
                'j': '𝘫',
                'k': '𝘬',
                'l': '𝘭',
                'm': '𝘮',
                'n': '𝘯',
                'o': '𝘰',
                'p': '𝘱',
                'q': '𝘲',
                'r': '𝘳',
                's': '𝘴',
                't': '𝘵',
                'u': '𝘶',
                'v': '𝘷',
                'w': '𝘸',
                'x': '𝘹',
                'y': '𝘺',
                'z': '𝘻',
                'A': '𝘈',
                'B': '𝘉',
                'C': '𝘊',
                'D': '𝘋',
                'E': '𝘌',
                'F': '𝘍',
                'G': '𝘎',
                'H': '𝘏',
                'I': '𝘐',
                'J': '𝘑',
                'K': '𝘒',
                'L': '𝘓',
                'M': '𝘔',
                'N': '𝘕',
                'O': '𝘖',
                'P': '𝘗',
                'Q': '𝘘',
                'R': '𝘙',
                'S': '𝘚',
                'T': '𝘛',
                'U': '𝘜',
                'V': '𝘝',
                'W': '𝘞',
                'X': '𝘟',
                'Y': '𝘠',
                'Z': '𝘡'
            };
            return italicChars[char] || char;
        }

        function getBoldChar(char) {
            const boldChars = {
                'a': '𝐚',
                'b': '𝐛',
                'c': '𝐜',
                'd': '𝐝',
                'e': '𝐞',
                'f': '𝐟',
                'g': '𝐠',
                'h': '𝐡',
                'i': '𝐢',
                'j': '𝐣',
                'k': '𝐤',
                'l': '𝐥',
                'm': '𝐦',
                'n': '𝐧',
                'o': '𝐨',
                'p': '𝐩',
                'q': '𝐪',
                'r': '𝐫',
                's': '𝐬',
                't': '𝐭',
                'u': '𝐮',
                'v': '𝐯',
                'w': '𝐰',
                'x': '𝐱',
                'y': '𝐲',
                'z': '𝐳',
                'A': '𝐀',
                'B': '𝐁',
                'C': '𝐂',
                'D': '𝐃',
                'E': '𝐄',
                'F': '𝐅',
                'G': '𝐆',
                'H': '𝐇',
                'I': '𝐈',
                'J': '𝐉',
                'K': '𝐊',
                'L': '𝐋',
                'M': '𝐌',
                'N': '𝐍',
                'O': '𝐎',
                'P': '𝐏',
                'Q': '𝐐',
                'R': '𝐑',
                'S': '𝐒',
                'T': '𝐓',
                'U': '𝐔',
                'V': '𝐕',
                'W': '𝐖',
                'X': '𝐗',
                'Y': '𝐘',
                'Z': '𝐙'
            };
            return boldChars[char] || char;
        }

        function getCursiveChar(char) {
            const cursiveChars = {
                'A': '𝒜',
                'B': 'ℬ',
                'C': '𝒞',
                'D': '𝒟',
                'E': 'ℰ',
                'F': 'ℱ',
                'G': '𝒢',
                'H': 'ℋ',
                'I': 'ℐ',
                'J': '𝒥',
                'K': '𝒦',
                'L': 'ℒ',
                'M': 'ℳ',
                'N': '𝒩',
                'O': '𝒪',
                'P': '𝒫',
                'Q': '𝒬',
                'R': 'ℛ',
                'S': '𝒮',
                'T': '𝒯',
                'U': '𝒰',
                'V': '𝒱',
                'W': '𝒲',
                'X': '𝒳',
                'Y': '𝒴',
                'Z': '𝒵',
                'a': '𝒶',
                'b': '𝒷',
                'c': '𝒸',
                'd': '𝒹',
                'e': 'ℯ',
                'f': '𝒻',
                'g': 'ℊ',
                'h': '𝒽',
                'i': '𝒾',
                'j': '𝒿',
                'k': '𝓀',
                'l': '𝓁',
                'm': '𝓂',
                'n': '𝓃',
                'o': 'ℴ',
                'p': '𝓅',
                'q': '𝓆',
                'r': '𝓇',
                's': '𝓈',
                't': '𝓉',
                'u': '𝓊',
                'v': '𝓋',
                'w': '𝓌',
                'x': '𝓍',
                'y': '𝓎',
                'z': '𝓏'
            };
            return cursiveChars[char] || char;
        }


        function getSquareChar(char) {
            const squareChars = {
                'a': '🄰',
                'b': '🄱',
                'c': '🄲',
                'd': '🄳',
                'e': '🄴',
                'f': '🄵',
                'g': '🄶',
                'h': '🄷',
                'i': '🄸',
                'j': '🄹',
                'k': '🄺',
                'l': '🄻',
                'm': '🄼',
                'n': '🄽',
                'o': '🄾',
                'p': '🄿',
                'q': '🅀',
                'r': '🅁',
                's': '🅂',
                't': '🅃',
                'u': '🅄',
                'v': '🅅',
                'w': '🅆',
                'x': '🅇',
                'y': '🅈',
                'z': '🅉',
                'A': '🄰',
                'B': '🄱',
                'C': '🄲',
                'D': '🄳',
                'E': '🄴',
                'F': '🄵',
                'G': '🄶',
                'H': '🄷',
                'I': '🄸',
                'J': '🄹',
                'K': '🄺',
                'L': '🄻',
                'M': '🄼',
                'N': '🄽',
                'O': '🄾',
                'P': '🄿',
                'Q': '🅀',
                'R': '🅁',
                'S': '🅂',
                'T': '🅃',
                'U': '🅄',
                'V': '🅅',
                'W': '🅆',
                'X': '🅇',
                'Y': '🅈',
                'Z': '🅉'
            };
            return squareChars[char] || char;
        }

        function getSquaredLatinChar(char) {
            const squaredLatinChars = {
                'A': '🅰',
                'B': '🅱',
                'C': '🅲',
                'D': '🅳',
                'E': '🅴',
                'F': '🅵',
                'G': '🅶',
                'H': '🅷',
                'I': '🅸',
                'J': '🅹',
                'K': '🅺',
                'L': '🅻',
                'M': '🅼',
                'N': '🅽',
                'O': '🅾',
                'P': '🅿',
                'Q': '🆀',
                'R': '🆁',
                'S': '🆂',
                'T': '🆃',
                'U': '🆄',
                'V': '🆅',
                'W': '🆆',
                'X': '🆇',
                'Y': '🆈',
                'Z': '🆉',
                'a': '🅰',
                'b': '🅱',
                'c': '🅲',
                'd': '🅳',
                'e': '🅴',
                'f': '🅵',
                'g': '🅶',
                'h': '🅷',
                'i': '🅸',
                'j': '🅹',
                'k': '🅺',
                'l': '🅻',
                'm': '🅼',
                'n': '🅽',
                'o': '🅾',
                'p': '🅿',
                'q': '🆀',
                'r': '🆁',
                's': '🆂',
                't': '🆃',
                'u': '🆄',
                'v': '🆅',
                'w': '🆆',
                'x': '🆇',
                'y': '🆈',
                'z': '🆉'
            };
            return squaredLatinChars[char] || char;
        }

        function getAncientChar(char) {
            const ancientChars = {
                'a': 'ꍏ',
                'b': 'ꌃ',
                'c': 'ꉓ',
                'd': 'ꀸ',
                'e': 'ꍟ',
                'f': 'ꎇ',
                'g': 'ꁅ',
                'h': 'ꃅ',
                'i': 'ꀤ',
                'j': 'ꀭ',
                'k': 'ꀘ',
                'l': '꒒',
                'm': 'ꂵ',
                'n': 'ꈤ',
                'o': 'ꂦ',
                'p': 'ꉣ',
                'q': 'ꆰ',
                'r': 'ꋪ',
                's': 'ꌗ',
                't': '꓄',
                'u': 'ꀎ',
                'v': 'ꃴ',
                'w': 'ꅏ',
                'x': 'ꊼ',
                'y': 'ꌩ',
                'z': 'ꁴ',
                'A': 'ꍏ',
                'B': 'ꌃ',
                'C': 'ꉓ',
                'D': 'ꀸ',
                'E': 'ꍟ',
                'F': 'ꎇ',
                'G': 'ꁅ',
                'H': 'ꃅ',
                'I': 'ꀤ',
                'J': 'ꀭ',
                'K': 'ꀘ',
                'L': '꒒',
                'M': 'ꂵ',
                'N': 'ꈤ',
                'O': 'ꂦ',
                'P': 'ꉣ',
                'Q': 'ꆰ',
                'R': 'ꋪ',
                'S': 'ꌗ',
                'T': '꓄',
                'U': 'ꀎ',
                'V': 'ꃴ',
                'W': 'ꅏ',
                'X': 'ꊼ',
                'Y': 'ꌩ',
                'Z': 'ꁴ'
            };
            return ancientChars[char] || char;
        }


        function getWideChar(char) {
            const wideChars = {
                'a': 'ａ',
                'b': 'ｂ',
                'c': 'ｃ',
                'd': 'ｄ',
                'e': 'ｅ',
                'f': 'ｆ',
                'g': 'ｇ',
                'h': 'ｈ',
                'i': 'ｉ',
                'j': 'ｊ',
                'k': 'ｋ',
                'l': 'ｌ',
                'm': 'ｍ',
                'n': 'ｎ',
                'o': 'ｏ',
                'p': 'ｐ',
                'q': 'ｑ',
                'r': 'ｒ',
                's': 'ｓ',
                't': 'ｔ',
                'u': 'ｕ',
                'v': 'ｖ',
                'w': 'ｗ',
                'x': 'ｘ',
                'y': 'ｙ',
                'z': 'ｚ',
                'A': 'Ａ',
                'B': 'Ｂ',
                'C': 'Ｃ',
                'D': 'Ｄ',
                'E': 'Ｅ',
                'F': 'Ｆ',
                'G': 'Ｇ',
                'H': 'Ｈ',
                'I': 'Ｉ',
                'J': 'Ｊ',
                'K': 'Ｋ',
                'L': 'Ｌ',
                'M': 'Ｍ',
                'N': 'Ｎ',
                'O': 'Ｏ',
                'P': 'Ｐ',
                'Q': 'Ｑ',
                'R': 'Ｒ',
                'S': 'Ｓ',
                'T': 'Ｔ',
                'U': 'Ｕ',
                'V': 'Ｖ',
                'W': 'Ｗ',
                'X': 'Ｘ',
                'Y': 'Ｙ',
                'Z': 'Ｚ'
            };
            return wideChars[char] || char;
        }

        function getReverseMirrorChar(char) {
            const reverseMirrorChars = {
                'a': 'ɐ',
                'b': 'q',
                'c': 'ɔ',
                'd': 'p',
                'e': 'ǝ',
                'f': 'ɟ',
                'g': 'ƃ',
                'h': 'ɥ',
                'i': 'ᴉ',
                'j': 'ɾ',
                'k': 'ʞ',
                'l': 'l',
                'm': 'ɯ',
                'n': 'u',
                'o': 'o',
                'p': 'd',
                'q': 'b',
                'r': 'ɹ',
                's': 's',
                't': 'ʇ',
                'u': 'n',
                'v': 'ʌ',
                'w': 'ʍ',
                'x': 'x',
                'y': 'ʎ',
                'z': 'z',
                'A': 'ɐ',
                'B': 'q',
                'C': 'ɔ',
                'D': 'p',
                'E': 'ǝ',
                'F': 'ɟ',
                'G': 'ƃ',
                'H': 'ɥ',
                'I': 'ᴉ',
                'J': 'ɾ',
                'K': 'ʞ',
                'L': 'l',
                'M': 'ɯ',
                'N': 'u',
                'O': 'o',
                'P': 'd',
                'Q': 'b',
                'R': 'ɹ',
                'S': 's',
                'T': 'ʇ',
                'U': 'n',
                'V': 'ʌ',
                'W': 'ʍ',
                'X': 'x',
                'Y': 'ʎ',
                'Z': 'z'
            };
            return reverseMirrorChars[char] || char;
        }

        function getUnderlinedChar(char) {
            const underlinedChars = {
                'A': 'A̲',
                'B': 'B̲',
                'C': 'C̲',
                'D': 'D̲',
                'E': 'E̲',
                'F': 'F̲',
                'G': 'G̲',
                'H': 'H̲',
                'I': 'I̲',
                'J': 'J̲',
                'K': 'K̲',
                'L': 'L̲',
                'M': 'M̲',
                'N': 'N̲',
                'O': 'O̲',
                'P': 'P̲',
                'Q': 'Q̲',
                'R': 'R̲',
                'S': 'S̲',
                'T': 'T̲',
                'U': 'U̲',
                'V': 'V̲',
                'W': 'W̲',
                'X': 'X̲',
                'Y': 'Y̲',
                'Z': 'Z̲',
                'a': 'a̲',
                'b': 'b̲',
                'c': 'c̲',
                'd': 'd̲',
                'e': 'e̲',
                'f': 'f̲',
                'g': 'g̲',
                'h': 'h̲',
                'i': 'i̲',
                'j': 'j̲',
                'k': 'k̲',
                'l': 'l̲',
                'm': 'm̲',
                'n': 'n̲',
                'o': 'o̲',
                'p': 'p̲',
                'q': 'q̲',
                'r': 'r̲',
                's': 's̲',
                't': 't̲',
                'u': 'u̲',
                'v': 'v̲',
                'w': 'w̲',
                'x': 'x̲',
                'y': 'y̲',
                'z': 'z̲'
            };
            return underlinedChars[char] || char;
        }

        function getDarkBubbleChar(char) {
            const darkBubbleChars = {
                'A': '🅐',
                'B': '🅑',
                'C': '🅒',
                'D': '🅓',
                'E': '🅔',
                'F': '🅕',
                'G': '🅖',
                'H': '🅗',
                'I': '🅘',
                'J': '🅙',
                'K': '🅚',
                'L': '🅛',
                'M': '🅜',
                'N': '🅝',
                'O': '🅞',
                'P': '🅟',
                'Q': '🅠',
                'R': '🅡',
                'S': '🅢',
                'T': '🅣',
                'U': '🅤',
                'V': '🅥',
                'W': '🅦',
                'X': '🅧',
                'Y': '🅨',
                'Z': '🅩',
                'a': '🅐',
                'b': '🅑',
                'c': '🅒',
                'd': '🅓',
                'e': '🅔',
                'f': '🅕',
                'g': '🅖',
                'h': '🅗',
                'i': '🅘',
                'j': '🅙',
                'k': '🅚',
                'l': '🅛',
                'm': '🅜',
                'n': '🅝',
                'o': '🅞',
                'p': '🅟',
                'q': '🅠',
                'r': '🅡',
                's': '🅢',
                't': '🅣',
                'u': '🅤',
                'v': '🅥',
                'w': '🅦',
                'x': '🅧',
                'y': '🅨',
                'z': '🅩'
            };
            return darkBubbleChars[char] || char;
        }

        function getBubblesChar(char) {
            const bubblesMap = {
                'A': 'Ⓐ',
                'B': 'Ⓑ',
                'C': 'Ⓒ',
                'D': 'Ⓓ',
                'E': 'Ⓔ',
                'F': 'Ⓕ',
                'G': 'Ⓖ',
                'H': 'Ⓗ',
                'I': 'Ⓘ',
                'J': 'Ⓙ',
                'K': 'Ⓚ',
                'L': 'Ⓛ',
                'M': 'Ⓜ',
                'N': 'Ⓝ',
                'O': 'Ⓞ',
                'P': 'Ⓟ',
                'Q': 'Ⓠ',
                'R': 'Ⓡ',
                'S': 'Ⓢ',
                'T': 'Ⓣ',
                'U': 'Ⓤ',
                'V': 'Ⓥ',
                'W': 'Ⓦ',
                'X': 'Ⓧ',
                'Y': 'Ⓨ',
                'Z': 'Ⓩ',
                'a': 'ⓐ',
                'b': 'ⓑ',
                'c': 'ⓒ',
                'd': 'ⓓ',
                'e': 'ⓔ',
                'f': 'ⓕ',
                'g': 'ⓖ',
                'h': 'ⓗ',
                'i': 'ⓘ',
                'j': 'ⓙ',
                'k': 'ⓚ',
                'l': 'ⓛ',
                'm': 'ⓜ',
                'n': 'ⓝ',
                'o': 'ⓞ',
                'p': 'ⓟ',
                'q': 'ⓠ',
                'r': 'ⓡ',
                's': 'ⓢ',
                't': 'ⓣ',
                'u': 'ⓤ',
                'v': 'ⓥ',
                'w': 'ⓦ',
                'x': 'ⓧ',
                'y': 'ⓨ',
                'z': 'ⓩ'
            };

            return bubblesMap[char] || char;
        }


        function getStrikeThroughChar(char) {
            // The combining long stroke overlay character
            const strikeThrough = '\u0336';
            return char + strikeThrough;
        }

        function getBigRussianChar(char) {
            const bigRussianChars = {
                'A': 'Д',
                'B': 'Б',
                'C': 'C',
                'D': 'D',
                'E': 'Ξ',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'J': 'J',
                'K': 'Ҝ',
                'L': 'L',
                'M': 'M',
                'N': 'И',
                'O': 'Ф',
                'P': 'P',
                'Q': 'Ǫ',
                'R': 'Я',
                'S': 'S',
                'T': 'Γ',
                'U': 'Ц',
                'V': 'V',
                'W': 'Щ',
                'X': 'Ж',
                'Y': 'У',
                'Z': 'Z',
                'a': 'д',
                'b': 'б',
                'c': 'c',
                'd': 'd',
                'e': 'ξ',
                'f': 'f',
                'g': 'g',
                'h': 'h',
                'i': 'i',
                'j': 'j',
                'k': 'Ҝ',
                'l': 'l',
                'm': 'm',
                'n': 'и',
                'o': 'ф',
                'p': 'p',
                'q': 'ǫ',
                'r': 'я',
                's': 's',
                't': 'г',
                'u': 'ц',
                'v': 'v',
                'w': 'щ',
                'x': 'ж',
                'y': 'у',
                'z': 'z'
            };
            return bigRussianChars[char] || char;
        }

        function getAsianFusionChar(char) {
            const asianFusionChars = {
                'A': 'ﾑ',
                'B': '乃',
                'C': 'ᄃ',
                'D': 'り',
                'E': '乇',
                'F': 'ｷ',
                'G': 'ム',
                'H': 'ん',
                'I': 'ﾉ',
                'J': 'ﾌ',
                'K': 'ズ',
                'L': 'ﾚ',
                'M': 'ﾶ',
                'N': '刀',
                'O': 'の',
                'P': 'ｱ',
                'Q': 'ゐ',
                'R': '尺',
                'S': '丂',
                'T': 'ｲ',
                'U': 'ひ',
                'V': '√',
                'W': 'W',
                'X': 'ﾒ',
                'Y': 'ﾘ',
                'Z': '乙',
                'a': 'ﾑ',
                'b': '乃',
                'c': 'ᄃ',
                'd': 'り',
                'e': '乇',
                'f': 'ｷ',
                'g': 'ム',
                'h': 'ん',
                'i': 'ﾉ',
                'j': 'ﾌ',
                'k': 'ズ',
                'l': 'ﾚ',
                'm': 'ﾶ',
                'n': '刀',
                'o': 'の',
                'p': 'ｱ',
                'q': 'ゐ',
                'r': '尺',
                's': '丂',
                't': 'ｲ',
                'u': 'ひ',
                'v': '√',
                'w': 'W',
                'x': 'ﾒ',
                'y': 'ﾘ',
                'z': '乙'
            };
            return asianFusionChars[char] || char;
        }

        function getMythicalChar(char) {
            const mythicalChars = {
                'a': 'λ',
                'b': 'ß',
                'c': 'ƈ',
                'd': 'đ',
                'e': 'ë',
                'f': 'ƒ',
                'g': 'ǥ',
                'h': 'ħ',
                'i': 'ï',
                'j': 'j',
                'k': 'ƙ',
                'l': 'ł',
                'm': 'м',
                'n': 'ŋ',
                'o': 'ø',
                'p': 'ρ',
                'q': 'q',
                'r': 'Я',
                's': 'ƨ',
                't': 'ŧ',
                'u': 'ų',
                'v': 'v',
                'w': 'ш',
                'x': 'х',
                'y': '¥',
                'z': 'ƺ',
                'A': 'Λ',
                'B': 'ß',
                'C': 'Ƈ',
                'D': 'Ð',
                'E': 'Ë',
                'F': 'Ғ',
                'G': 'Ɠ',
                'H': 'Ħ',
                'I': 'Ï',
                'J': 'J',
                'K': 'Ҡ',
                'L': 'Ł',
                'M': '₥',
                'N': 'Ŋ',
                'O': 'Ø',
                'P': 'P',
                'Q': 'Ǫ',
                'R': 'Я',
                'S': 'Ƨ',
                'T': 'ŧ',
                'U': 'ų',
                'V': 'V',
                'W': 'Щ',
                'X': 'Ж',
                'Y': 'Ϋ',
                'Z': 'Z'
            };
            return mythicalChars[char] || char;
        }

        function getAlphaChar(char) {
            const alphaChars = {
                'A': 'α',
                'B': 'ɓ',
                'C': 'ĉ',
                'D': '∂',
                'E': 'ε',
                'F': 'ƒ',
                'G': 'ɠ',
                'H': 'ɦ',
                'I': 'เ',
                'J': 'ʝ',
                'K': 'қ',
                'L': 'ℓ',
                'M': 'ɱ',
                'N': 'ɳ',
                'O': 'σ',
                'P': 'ρ',
                'Q': 'φ',
                'R': 'г',
                'S': 'ƭ',
                'T': 'µ',
                'U': 'ѵ',
                'V': 'ω',
                'W': 'א',
                'X': 'ყ',
                'Y': 'ƺ',
                'Z': 'ž',
                'a': 'α',
                'b': 'ɓ',
                'c': 'ĉ',
                'd': '∂',
                'e': 'ε',
                'f': 'ƒ',
                'g': 'ɠ',
                'h': 'ɦ',
                'i': 'เ',
                'j': 'ʝ',
                'k': 'қ',
                'l': 'ℓ',
                'm': 'ɱ',
                'n': 'ɳ',
                'o': 'σ',
                'p': 'ρ',
                'q': 'φ',
                'r': 'г',
                's': 'ƭ',
                't': 'µ',
                'u': 'ѵ',
                'v': 'ω',
                'w': 'א',
                'x': 'ყ',
                'y': 'ƺ',
                'z': 'ž'
            };
            return alphaChars[char] || char;
        }

        function getLinerChar(char) {
            const linerChars = {
                'A': '₳',
                'B': '฿',
                'C': 'Ȼ',
                'D': 'Ɖ',
                'E': 'Ɇ',
                'F': 'Ŧ',
                'G': 'Ǥ',
                'H': 'Ħ',
                'I': 'ı',
                'J': 'J',
                'K': '₭',
                'L': 'Ⱡ',
                'M': '₥',
                'N': '₦',
                'O': 'Ø',
                'P': '₱',
                'Q': 'Q',
                'R': 'Ɽ',
                'S': '₴',
                'T': '₮',
                'U': 'Ʉ',
                'V': 'V',
                'W': '₩',
                'X': 'Ӿ',
                'Y': 'Ɏ',
                'Z': 'Ƶ',
                'a': '₳',
                'b': '฿',
                'c': 'Ȼ',
                'd': 'Ɖ',
                'e': 'Ɇ',
                'f': 'Ŧ',
                'g': 'Ǥ',
                'h': 'Ħ',
                'i': 'ı',
                'j': 'J',
                'k': '₭',
                'l': 'Ⱡ',
                'm': '₥',
                'n': '₦',
                'o': 'Ø',
                'p': '₱',
                'q': 'Q',
                'r': 'Ɽ',
                's': '₴',
                't': '₮',
                'u': 'Ʉ',
                'v': 'V',
                'w': '₩',
                'x': 'Ӿ',
                'y': 'Ɏ',
                'z': 'Ƶ'
            };
            return linerChars[char] || char;
        }

        function getEchoChar(char) {
            const echoChars = {
                'A': 'ᗩ',
                'B': 'ᗷ',
                'C': 'ᑕ',
                'D': 'ᗪ',
                'E': 'ᙓ',
                'F': 'ᖴ',
                'G': 'ᘜ',
                'H': 'ᕼ',
                'I': 'ᓰ',
                'J': 'ᒍ',
                'K': 'K',
                'L': 'ᒪ',
                'M': 'ᗰ',
                'N': 'ᑎ',
                'O': 'O',
                'P': 'ᑭ',
                'Q': 'ᑫ',
                'R': 'ᖇ',
                'S': 'S',
                'T': 'ᑎ',
                'U': 'ᑌ',
                'V': 'ᐯ',
                'W': 'ᗯ',
                'X': '᙭',
                'Y': 'Ꭹ',
                'Z': 'Ꮓ',
                'a': 'ᗩ',
                'b': 'ᗷ',
                'c': 'ᑕ',
                'd': 'ᗪ',
                'e': 'ᙓ',
                'f': 'ᖴ',
                'g': 'ᘜ',
                'h': 'ᕼ',
                'i': 'ᓰ',
                'j': 'ᒍ',
                'k': 'K',
                'l': 'ᒪ',
                'm': 'ᗰ',
                'n': 'ᑎ',
                'o': 'O',
                'p': 'ᑭ',
                'q': 'ᑫ',
                'r': 'ᖇ',
                's': 'S',
                't': 'ᑎ',
                'u': 'ᑌ',
                'v': 'ᐯ',
                'w': 'ᗯ',
                'x': '᙭',
                'y': 'Ꭹ',
                'z': 'Ꮓ'
            };
            return echoChars[char] || char;
        }

        function getElegantChar(char) {
            const elegantChars = {
                'A': 'მ',
                'B': 'ზ',
                'C': 'ე',
                'D': 'ძ',
                'E': 'პ',
                'F': 'f',
                'G': 'ც',
                'H': 'h',
                'I': 'í',
                'J': 'ʝ',
                'K': 'κ',
                'L': 'l',
                'M': 'ო',
                'N': 'ղ',
                'O': 'ѻ',
                'P': 'ρ',
                'Q': 'გ',
                'R': 'Γ',
                'S': 'ჰ',
                'T': 'ŧ',
                'U': 'υ',
                'V': 'v',
                'W': 'w',
                'X': 'ჯ',
                'Y': 'ყ',
                'Z': 'ɀ',
                'a': 'მ',
                'b': 'ზ',
                'c': 'ე',
                'd': 'ძ',
                'e': 'პ',
                'f': 'f',
                'g': 'ც',
                'h': 'h',
                'i': 'í',
                'j': 'ʝ',
                'k': 'κ',
                'l': 'l',
                'm': 'ო',
                'n': 'ղ',
                'o': 'ѻ',
                'p': 'ρ',
                'q': 'გ',
                'r': 'Γ',
                's': 'ჰ',
                't': 'ŧ',
                'u': 'υ',
                'v': 'v',
                'w': 'w',
                'x': 'ჯ',
                'y': 'ყ',
                'z': 'ɀ'
            };
            return elegantChars[char] || char;
        }

        function getStarsMidChar(char) {
            const starsMidChars = {
                'A': 'A༙྇',
                'B': 'B༙྇',
                'C': 'C༙྇',
                'D': 'D༙྇',
                'E': 'E༙྇',
                'F': 'F༙྇',
                'G': 'G༙྇',
                'H': 'H༙྇',
                'I': 'I༙྇',
                'J': 'J༙྇',
                'K': 'K༙྇',
                'L': 'L༙྇',
                'M': 'M༙྇',
                'N': 'N༙྇',
                'O': 'O༙྇',
                'P': 'P༙྇',
                'Q': 'Q༙྇',
                'R': 'R༙྇',
                'S': 'S༙྇',
                'T': 'T༙྇',
                'U': 'U༙྇',
                'V': 'V༙྇',
                'W': 'W༙྇',
                'X': 'X༙྇',
                'Y': 'Y༙྇',
                'Z': 'Z༙྇',
                'a': 'a༙྇',
                'b': 'b༙྇',
                'c': 'c༙྇',
                'd': 'd༙྇',
                'e': 'e༙྇',
                'f': 'f༙྇',
                'g': 'g༙྇',
                'h': 'h༙྇',
                'i': 'i༙྇',
                'j': 'j༙྇',
                'k': 'k༙྇',
                'l': 'l༙྇',
                'm': 'm༙྇',
                'n': 'n༙྇',
                'o': 'o༙྇',
                'p': 'p༙྇',
                'q': 'q༙྇',
                'r': 'r༙྇',
                's': 's༙྇',
                't': 't༙྇',
                'u': 'u༙྇',
                'v': 'v༙྇',
                'w': 'w༙྇',
                'x': 'x༙྇',
                'y': 'y༙྇',
                'z': 'z༙྇'
            };
            return starsMidChars[char] || char;
        }

        function getSuperScriptChar(char) {
            const superScriptChars = {
                'A': 'ᴬ',
                'B': 'ᴮ',
                'C': 'ᶜ',
                'D': 'ᴰ',
                'E': 'ᴱ',
                'F': 'ᴳ',
                'G': 'ᴳ',
                'H': 'ᴴ',
                'I': 'ᴵ',
                'J': 'ᴶ',
                'K': 'ᴷ',
                'L': 'ᴸ',
                'M': 'ᴹ',
                'N': 'ᴺ',
                'O': 'ᴼ',
                'P': 'ᴾ',
                'Q': 'ᑫ',
                'R': 'ᴿ',
                'S': 'ˢ',
                'T': 'ᵀ',
                'U': 'ᵁ',
                'V': 'ⱽ',
                'W': 'ᵂ',
                'X': 'ˣ',
                'Y': 'ᵞ',
                'Z': 'ᶻ',
                'a': 'ᴬ',
                'b': 'ᴮ',
                'c': 'ᶜ',
                'd': 'ᴰ',
                'e': 'ᴱ',
                'f': 'ᶦ',
                'g': 'ᵍ',
                'h': 'ʰ',
                'i': 'ᴵ',
                'j': 'ʲ',
                'k': 'ᵏ',
                'l': 'ˡ',
                'm': 'ᵐ',
                'n': 'ⁿ',
                'o': 'ᴼ',
                'p': 'ᵖ',
                'q': 'q',
                'r': 'ʳ',
                's': 'ˢ',
                't': 'ᵗ',
                'u': 'ᵘ',
                'v': 'ᵛ',
                'w': 'ʷ',
                'x': 'ˣ',
                'y': 'ʸ',
                'z': 'ᶻ',
                '1': '¹',
                '2': '²',
                '3': '³',
                '4': '⁴',
                '5': '⁵',
                '6': '⁶',
                '7': '⁷',
                '8': '⁸',
                '9': '⁹',
                '0': '⁰'
            };
            return superScriptChars[char] || char;
        }

        function getSubScriptChar(char) {
            const subScriptChars = {
                'A': 'ₐ',
                'B': 'ₑ',
                'C': 'ₒ',
                'D': 'ₓ',
                'E': 'ₑ',
                'F': 'ₓ',
                'G': 'ₕ',
                'H': 'ₕ',
                'I': 'ᵢ',
                'J': 'ⱼ',
                'K': 'ₖ',
                'L': 'ₗ',
                'M': 'ₘ',
                'N': 'ₙ',
                'O': 'ₒ',
                'P': 'ₚ',
                'Q': 'q',
                'R': 'ᵣ',
                'S': 'ₛ',
                'T': 'ₜ',
                'U': 'ᵘ',
                'V': 'ᵛ',
                'W': 'w',
                'X': 'ₓ',
                'Y': 'ᵞ',
                'Z': '𝓏',
                'a': 'ₐ',
                'b': 'b',
                'c': 'c',
                'd': 'd',
                'e': 'ₑ',
                'f': 'f',
                'g': 'g',
                'h': 'ₕ',
                'i': 'ᵢ',
                'j': 'ⱼ',
                'k': 'ₖ',
                'l': 'ₗ',
                'm': 'ₘ',
                'n': 'ₙ',
                'o': 'ₒ',
                'p': 'ₚ',
                'q': 'q',
                'r': 'ᵣ',
                's': 'ₛ',
                't': 'ₜ',
                'u': 'ᵘ',
                'v': 'ᵛ',
                'w': 'w',
                'x': 'ₓ',
                'y': 'y',
                'z': '𝓏',
                '1': '₁',
                '2': '₂',
                '3': '₃',
                '4': '₄',
                '5': '₅',
                '6': '₆',
                '7': '₇',
                '8': '₈',
                '9': '₉',
                '0': '₀'
            };
            return subScriptChars[char] || char;
        }

        function getBoldItalicChar(char) {
            const boldItalicChars = {
                'A': '𝑨',
                'B': '𝑩',
                'C': '𝑪',
                'D': '𝑫',
                'E': '𝑬',
                'F': '𝑭',
                'G': '𝑮',
                'H': '𝑯',
                'I': '𝑰',
                'J': '𝑱',
                'K': '𝑲',
                'L': '𝑳',
                'M': '𝑴',
                'N': '𝑵',
                'O': '𝑶',
                'P': '𝑷',
                'Q': '𝑸',
                'R': '𝑹',
                'S': '𝑺',
                'T': '𝑻',
                'U': '𝑼',
                'V': '𝑽',
                'W': '𝑾',
                'X': '𝑿',
                'Y': '𝒀',
                'Z': '𝒁',
                'a': '𝒂',
                'b': '𝒃',
                'c': '𝒄',
                'd': '𝒅',
                'e': '𝒆',
                'f': '𝒇',
                'g': '𝒈',
                'h': '𝒉',
                'i': '𝒊',
                'j': '𝒋',
                'k': '𝒌',
                'l': '𝒍',
                'm': '𝒎',
                'n': '𝒏',
                'o': '𝒐',
                'p': '𝒑',
                'q': '𝒒',
                'r': '𝒓',
                's': '𝒔',
                't': '𝒕',
                'u': '𝒖',
                'v': '𝒗',
                'w': '𝒘',
                'x': '𝒙',
                'y': '𝒚',
                'z': '𝒛'
            };
            return boldItalicChars[char] || char;
        }

        function getAgeOldChar(char) {
            const ageOldChars = {
                'A': 'Ꭿ',
                'B': 'Ᏸ',
                'C': 'Ꮸ',
                'D': 'Ꭰ',
                'E': 'Ꭼ',
                'F': 'Ꮀ',
                'G': 'Ꮆ',
                'H': 'Ꮋ',
                'I': 'Ꭸ',
                'J': 'Ꮰ',
                'K': 'Ꮶ',
                'L': 'Ꮭ',
                'M': 'Ꮇ',
                'N': 'Ꮑ',
                'O': 'Ꮎ',
                'P': 'Ꮲ',
                'Q': 'Ꮕ',
                'R': 'Ꮢ',
                'S': 'Ꮥ',
                'T': 'Ꮦ',
                'U': 'Ꮼ',
                'V': 'Ꮙ',
                'W': 'Ꮿ',
                'X': 'Ꮂ',
                'Y': 'Ꮍ',
                'Z': 'Ꮓ',
                'a': 'Ꭿ',
                'b': 'Ᏸ',
                'c': 'Ꮸ',
                'd': 'Ꭰ',
                'e': 'Ꭼ',
                'f': 'Ꮀ',
                'g': 'Ꮆ',
                'h': 'Ꮋ',
                'i': 'Ꭸ',
                'j': 'Ꮰ',
                'k': 'Ꮶ',
                'l': 'Ꮭ',
                'm': 'Ꮇ',
                'n': 'Ꮑ',
                'o': 'Ꮎ',
                'p': 'Ꮲ',
                'q': 'Ꮕ',
                'r': 'Ꮢ',
                's': 'Ꮥ',
                't': 'Ꮦ',
                'u': 'Ꮼ',
                'v': 'Ꮙ',
                'w': 'Ꮿ',
                'x': 'Ꮂ',
                'y': 'Ꮍ',
                'z': 'Ꮓ'
            };
            return ageOldChars[char] || char;
        }

        function getDotJoinerChar(char) {
            const dotJoinerChars = {
                'A': 'Å⫶',
                'B': 'B̊⫶',
                'C': 'C̊⫶',
                'D': 'D̊⫶',
                'E': 'E̊⫶',
                'F': 'F̊⫶',
                'G': 'G̊⫶',
                'H': 'H̊⫶',
                'I': 'I̊⫶',
                'J': 'J̊⫶',
                'K': 'K̊⫶',
                'L': 'L̊⫶',
                'M': 'M̊⫶',
                'N': 'N̊⫶',
                'O': 'O̊⫶',
                'P': 'P̊⫶',
                'Q': 'Q̊⫶',
                'R': 'R̊⫶',
                'S': 'S̊⫶',
                'T': 'T̊⫶',
                'U': 'Ů⫶',
                'V': 'V̊⫶',
                'W': 'W̊⫶',
                'X': 'X̊⫶',
                'Y': 'Y̊⫶',
                'Z': 'Z̊⫶',
                'a': 'å⫶',
                'b': 'b̊⫶',
                'c': 'c̊⫶',
                'd': 'd̊⫶',
                'e': 'e̊⫶',
                'f': 'f̊⫶',
                'g': 'g̊⫶',
                'h': 'h̊⫶',
                'i': 'i̊⫶',
                'j': 'j̊⫶',
                'k': 'k̊⫶',
                'l': 'l̊⫶',
                'm': 'm̊⫶',
                'n': 'n̊⫶',
                'o': 'o̊⫶',
                'p': 'p̊⫶',
                'q': 'q̊⫶',
                'r': 'r̊⫶',
                's': 's̊⫶',
                't': 't̊⫶',
                'u': 'ů⫶',
                'v': 'v̊⫶',
                'w': 'ẘ⫶',
                'x': 'x̊⫶',
                'y': 'ẙ⫶',
                'z': 'z̊⫶'
            };
            return dotJoinerChars[char] || char;
        }

        function getShadeChar(char) {
            const shadeChars = {
                'A': '░A░',
                'B': '░B░',
                'C': '░C░',
                'D': '░D░',
                'E': '░E░',
                'F': '░F░',
                'G': '░G░',
                'H': '░H░',
                'I': '░I░',
                'J': '░J░',
                'K': '░K░',
                'L': '░L░',
                'M': '░M░',
                'N': '░N░',
                'O': '░O░',
                'P': '░P░',
                'Q': '░Q░',
                'R': '░R░',
                'S': '░S░',
                'T': '░T░',
                'U': '░U░',
                'V': '░V░',
                'W': '░W░',
                'X': '░X░',
                'Y': '░Y░',
                'Z': '░Z░',
                'a': '░a░',
                'b': '░b░',
                'c': '░c░',
                'd': '░d░',
                'e': '░e░',
                'f': '░f░',
                'g': '░g░',
                'h': '░h░',
                'i': '░i░',
                'j': '░j░',
                'k': '░k░',
                'l': '░l░',
                'm': '░m░',
                'n': '░n░',
                'o': '░o░',
                'p': '░p░',
                'q': '░q░',
                'r': '░r░',
                's': '░s░',
                't': '░t░',
                'u': '░u░',
                'v': '░v░',
                'w': '░w░',
                'x': '░x░',
                'y': '░y░',
                'z': '░z░'
            };
            return shadeChars[char] || char;
        }

        function getCrossAboveChar(char) {
            const crossAboveChars = {
                'A': 'A͓̽',
                'B': 'B͓̽',
                'C': 'C͓̽',
                'D': 'D͓̽',
                'E': 'E͓̽',
                'F': 'F͓̽',
                'G': 'G͓̽',
                'H': 'H͓̽',
                'I': 'I͓̽',
                'J': 'J͓̽',
                'K': 'K͓̽',
                'L': 'L͓̽',
                'M': 'M͓̽',
                'N': 'N͓̽',
                'O': 'O͓̽',
                'P': 'P͓̽',
                'Q': 'Q͓̽',
                'R': 'R͓̽',
                'S': 'S͓̽',
                'T': 'T͓̽',
                'U': 'U͓̽',
                'V': 'V͓̽',
                'W': 'W͓̽',
                'X': 'X͓̽',
                'Y': 'Y͓̽',
                'Z': 'Z͓̽',
                'a': 'a͓̽',
                'b': 'b͓̽',
                'c': 'c͓̽',
                'd': 'd͓̽',
                'e': 'e͓̽',
                'f': 'f͓̽',
                'g': 'g͓̽',
                'h': 'h͓̽',
                'i': 'i͓̽',
                'j': 'j͓̽',
                'k': 'k͓̽',
                'l': 'l͓̽',
                'm': 'm͓̽',
                'n': 'n͓̽',
                'o': 'o͓̽',
                'p': 'p͓̽',
                'q': 'q͓̽',
                'r': 'r͓̽',
                's': 's͓̽',
                't': 't͓̽',
                'u': 'u͓̽',
                'v': 'v͓̽',
                'w': 'w͓̽',
                'x': 'x͓̽',
                'y': 'y͓̽',
                'z': 'z͓̽'
            };
            return crossAboveChars[char] || char;
        }

        function getCornerChar(char) {
            const cornerChars = {
                'A': '⌜A⌝',
                'B': '⌜B⌝',
                'C': '⌜C⌝',
                'D': '⌜D⌝',
                'E': '⌜E⌝',
                'F': '⌜F⌝',
                'G': '⌜G⌝',
                'H': '⌜H⌝',
                'I': '⌜I⌝',
                'J': '⌜J⌝',
                'K': '⌜K⌝',
                'L': '⌜L⌝',
                'M': '⌜M⌝',
                'N': '⌜N⌝',
                'O': '⌜O⌝',
                'P': '⌜P⌝',
                'Q': '⌜Q⌝',
                'R': '⌜R⌝',
                'S': '⌜S⌝',
                'T': '⌜T⌝',
                'U': '⌜U⌝',
                'V': '⌜V⌝',
                'W': '⌜W⌝',
                'X': '⌜X⌝',
                'Y': '⌜Y⌝',
                'Z': '⌜Z⌝',
                'a': '⌜a⌝',
                'b': '⌜b⌝',
                'c': '⌜c⌝',
                'd': '⌜d⌝',
                'e': '⌜e⌝',
                'f': '⌜f⌝',
                'g': '⌜g⌝',
                'h': '⌜h⌝',
                'i': '⌜i⌝',
                'j': '⌜j⌝',
                'k': '⌜k⌝',
                'l': '⌜l⌝',
                'm': '⌜m⌝',
                'n': '⌜n⌝',
                'o': '⌜o⌝',
                'p': '⌜p⌝',
                'q': '⌜q⌝',
                'r': '⌜r⌝',
                's': '⌜s⌝',
                't': '⌜t⌝',
                'u': '⌜u⌝',
                'v': '⌜v⌝',
                'w': '⌜w⌝',
                'x': '⌜x⌝',
                'y': '⌜y⌝',
                'z': '⌜z⌝'
            };
            return cornerChars[char] || char;
        }

        function getSquiggleChar(char) {
            const squiggleChars = {
                'A': '⇜A⇝',
                'B': '⇜B⇝',
                'C': '⇜C⇝',
                'D': '⇜D⇝',
                'E': '⇜E⇝',
                'F': '⇜F⇝',
                'G': '⇜G⇝',
                'H': '⇜H⇝',
                'I': '⇜I⇝',
                'J': '⇜J⇝',
                'K': '⇜K⇝',
                'L': '⇜L⇝',
                'M': '⇜M⇝',
                'N': '⇜N⇝',
                'O': '⇜O⇝',
                'P': '⇜P⇝',
                'Q': '⇜Q⇝',
                'R': '⇜R⇝',
                'S': '⇜S⇝',
                'T': '⇜T⇝',
                'U': '⇜U⇝',
                'V': '⇜V⇝',
                'W': '⇜W⇝',
                'X': '⇜X⇝',
                'Y': '⇜Y⇝',
                'Z': '⇜Z⇝',
                'a': '⇜a⇝',
                'b': '⇜b⇝',
                'c': '⇜c⇝',
                'd': '⇜d⇝',
                'e': '⇜e⇝',
                'f': '⇜f⇝',
                'g': '⇜g⇝',
                'h': '⇜h⇝',
                'i': '⇜i⇝',
                'j': '⇜j⇝',
                'k': '⇜k⇝',
                'l': '⇜l⇝',
                'm': '⇜m⇝',
                'n': '⇜n⇝',
                'o': '⇜o⇝',
                'p': '⇜p⇝',
                'q': '⇜q⇝',
                'r': '⇜r⇝',
                's': '⇜s⇝',
                't': '⇜t⇝',
                'u': '⇜u⇝',
                'v': '⇜v⇝',
                'w': '⇜w⇝',
                'x': '⇜x⇝',
                'y': '⇜y⇝',
                'z': '⇜z⇝'
            };
            return squiggleChars[char] || char;
        }

        function getWaveJoinerChar(char) {
            const waveJoinerChars = {
                'A': '≋A≋',
                'B': '≋B≋',
                'C': '≋C≋',
                'D': '≋D≋',
                'E': '≋E≋',
                'F': '≋F≋',
                'G': '≋G≋',
                'H': '≋H≋',
                'I': '≋I≋',
                'J': '≋J≋',
                'K': '≋K≋',
                'L': '≋L≋',
                'M': '≋M≋',
                'N': '≋N≋',
                'O': '≋O≋',
                'P': '≋P≋',
                'Q': '≋Q≋',
                'R': '≋R≋',
                'S': '≋S≋',
                'T': '≋T≋',
                'U': '≋U≋',
                'V': '≋V≋',
                'W': '≋W≋',
                'X': '≋X≋',
                'Y': '≋Y≋',
                'Z': '≋Z≋',
                'a': '≋a≋',
                'b': '≋b≋',
                'c': '≋c≋',
                'd': '≋d≋',
                'e': '≋e≋',
                'f': '≋f≋',
                'g': '≋g≋',
                'h': '≋h≋',
                'i': '≋i≋',
                'j': '≋j≋',
                'k': '≋k≋',
                'l': '≋l≋',
                'm': '≋m≋',
                'n': '≋n≋',
                'o': '≋o≋',
                'p': '≋p≋',
                'q': '≋q≋',
                'r': '≋r≋',
                's': '≋s≋',
                't': '≋t≋',
                'u': '≋u≋',
                'v': '≋v≋',
                'w': '≋w≋',
                'x': '≋x≋',
                'y': '≋y≋',
                'z': '≋z≋'
            };
            return waveJoinerChars[char] || char;
        }

        function getWhiteParenthesisChar(char) {
            const whiteParenthesisChars = {
                'A': '⦅A⦆',
                'B': '⦅B⦆',
                'C': '⦅C⦆',
                'D': '⦅D⦆',
                'E': '⦅E⦆',
                'F': '⦅F⦆',
                'G': '⦅G⦆',
                'H': '⦅H⦆',
                'I': '⦅I⦆',
                'J': '⦅J⦆',
                'K': '⦅K⦆',
                'L': '⦅L⦆',
                'M': '⦅M⦆',
                'N': '⦅N⦆',
                'O': '⦅O⦆',
                'P': '⦅P⦆',
                'Q': '⦅Q⦆',
                'R': '⦅R⦆',
                'S': '⦅S⦆',
                'T': '⦅T⦆',
                'U': '⦅U⦆',
                'V': '⦅V⦆',
                'W': '⦅W⦆',
                'X': '⦅X⦆',
                'Y': '⦅Y⦆',
                'Z': '⦅Z⦆',
                'a': '⦅a⦆',
                'b': '⦅b⦆',
                'c': '⦅c⦆',
                'd': '⦅d⦆',
                'e': '⦅e⦆',
                'f': '⦅f⦆',
                'g': '⦅g⦆',
                'h': '⦅h⦆',
                'i': '⦅i⦆',
                'j': '⦅j⦆',
                'k': '⦅k⦆',
                'l': '⦅l⦆',
                'm': '⦅m⦆',
                'n': '⦅n⦆',
                'o': '⦅o⦆',
                'p': '⦅p⦆',
                'q': '⦅q⦆',
                'r': '⦅r⦆',
                's': '⦅s⦆',
                't': '⦅t⦆',
                'u': '⦅u⦆',
                'v': '⦅v⦆',
                'w': '⦅w⦆',
                'x': '⦅x⦆',
                'y': '⦅y⦆',
                'z': '⦅z⦆'
            };
            return whiteParenthesisChars[char] || char;
        }

        function getBulletJoinChar(char) {
            const bulletJoinChar = '▪' + char + '▪';
            return bulletJoinChar;
        }

        function getArrowJoinerChar(char) {
            return `⤷${char}⤶`; // Wrap each character with arrows
        }

        function getSlashedChar(char) {
            return `〵${char}`; // Add the slashed symbol before each character
        }

        function getBlackFloretteChar(char) {
            return `【${char}】`; // Add the Black Florette symbols around each character
        }

        function getLineSeparatorBlockChar(char) {
            return `${char}╎`; // Add the Line Separator Block symbol after each character
        }

        function getLowLineChar(char) {
            const lowLineChars = {
                'A': 'A̲',
                'B': 'B̲',
                'C': 'C̲',
                'D': 'D̲',
                'E': 'E̲',
                'F': 'F̲',
                'G': 'G̲',
                'H': 'H̲',
                'I': 'I̲',
                'J': 'J̲',
                'K': 'K̲',
                'L': 'L̲',
                'M': 'M̲',
                'N': 'N̲',
                'O': 'O̲',
                'P': 'P̲',
                'Q': 'Q̲',
                'R': 'R̲',
                'S': 'S̲',
                'T': 'T̲',
                'U': 'U̲',
                'V': 'V̲',
                'W': 'W̲',
                'X': 'X̲',
                'Y': 'Y̲',
                'Z': 'Z̲',
                'a': 'a̲',
                'b': 'b̲',
                'c': 'c̲',
                'd': 'd̲',
                'e': 'e̲',
                'f': 'f̲',
                'g': 'g̲',
                'h': 'h̲',
                'i': 'i̲',
                'j': 'j̲',
                'k': 'k̲',
                'l': 'l̲',
                'm': 'm̲',
                'n': 'n̲',
                'o': 'o̲',
                'p': 'p̲',
                'q': 'q̲',
                'r': 'r̲',
                's': 's̲',
                't': 't̲',
                'u': 'u̲',
                'v': 'v̲',
                'w': 'w̲',
                'x': 'x̲',
                'y': 'y̲',
                'z': 'z̲'
            };
            return lowLineChars[char] || char;
        }

        function getDoubleMacronChar(char) {
            const doubleMacronChars = {
                'A': 'A͟',
                'B': 'B͟',
                'C': 'C͟',
                'D': 'D͟',
                'E': 'E͟',
                'F': 'F͟',
                'G': 'G͟',
                'H': 'H͟',
                'I': 'I͟',
                'J': 'J͟',
                'K': 'K͟',
                'L': 'L͟',
                'M': 'M͟',
                'N': 'N͟',
                'O': 'O͟',
                'P': 'P͟',
                'Q': 'Q͟',
                'R': 'R͟',
                'S': 'S͟',
                'T': 'T͟',
                'U': 'U͟',
                'V': 'V͟',
                'W': 'W͟',
                'X': 'X͟',
                'Y': 'Y͟',
                'Z': 'Z͟',
                'a': 'a͟',
                'b': 'b͟',
                'c': 'c͟',
                'd': 'd͟',
                'e': 'e͟',
                'f': 'f͟',
                'g': 'g͟',
                'h': 'h͟',
                'i': 'i͟',
                'j': 'j͟',
                'k': 'k͟',
                'l': 'l͟',
                'm': 'm͟',
                'n': 'n͟',
                'o': 'o͟',
                'p': 'p͟',
                'q': 'q͟',
                'r': 'r͟',
                's': 's͟',
                't': 't͟',
                'u': 'u͟',
                'v': 'v͟',
                'w': 'w͟',
                'x': 'x͟',
                'y': 'y͟',
                'z': 'z͟'
            };
            return doubleMacronChars[char] || char;
        }

        function getDoubleUnderlineChar(char) {
            const doubleUnderlineChars = {
                'A': 'A̳',
                'B': 'B̳',
                'C': 'C̳',
                'D': 'D̳',
                'E': 'E̳',
                'F': 'F̳',
                'G': 'G̳',
                'H': 'H̳',
                'I': 'I̳',
                'J': 'J̳',
                'K': 'K̳',
                'L': 'L̳',
                'M': 'M̳',
                'N': 'N̳',
                'O': 'O̳',
                'P': 'P̳',
                'Q': 'Q̳',
                'R': 'R̳',
                'S': 'S̳',
                'T': 'T̳',
                'U': 'U̳',
                'V': 'V̳',
                'W': 'W̳',
                'X': 'X̳',
                'Y': 'Y̳',
                'Z': 'Z̳',
                'a': 'a̳',
                'b': 'b̳',
                'c': 'c̳',
                'd': 'd̳',
                'e': 'e̳',
                'f': 'f̳',
                'g': 'g̳',
                'h': 'h̳',
                'i': 'i̳',
                'j': 'j̳',
                'k': 'k̳',
                'l': 'l̳',
                'm': 'm̳',
                'n': 'n̳',
                'o': 'o̳',
                'p': 'p̳',
                'q': 'q̳',
                'r': 'r̳',
                's': 's̳',
                't': 't̳',
                'u': 'u̳',
                'v': 'v̳',
                'w': 'w̳',
                'x': 'x̳',
                'y': 'y̳',
                'z': 'z̳'
            };
            return doubleUnderlineChars[char] || char;
        }

        function getTildeStrikeThroughChar(char) {
            const tildeStrikeThroughChars = {
                'A': 'A̴',
                'B': 'B̴',
                'C': 'C̴',
                'D': 'D̴',
                'E': 'E̴',
                'F': 'F̴',
                'G': 'G̴',
                'H': 'H̴',
                'I': 'I̴',
                'J': 'J̴',
                'K': 'K̴',
                'L': 'L̴',
                'M': 'M̴',
                'N': 'N̴',
                'O': 'O̴',
                'P': 'P̴',
                'Q': 'Q̴',
                'R': 'R̴',
                'S': 'S̴',
                'T': 'T̴',
                'U': 'U̴',
                'V': 'V̴',
                'W': 'W̴',
                'X': 'X̴',
                'Y': 'Y̴',
                'Z': 'Z̴',
                'a': 'a̴',
                'b': 'b̴',
                'c': 'c̴',
                'd': 'd̴',
                'e': 'e̴',
                'f': 'f̴',
                'g': 'g̴',
                'h': 'h̴',
                'i': 'i̴',
                'j': 'j̴',
                'k': 'k̴',
                'l': 'l̴',
                'm': 'm̴',
                'n': 'n̴',
                'o': 'o̴',
                'p': 'p̴',
                'q': 'q̴',
                'r': 'r̴',
                's': 's̴',
                't': 't̴',
                'u': 'u̴',
                'v': 'v̴',
                'w': 'w̴',
                'x': 'x̴',
                'y': 'y̴',
                'z': 'z̴'
            };
            return tildeStrikeThroughChars[char] || char;
        }

        function getSlashThroughChar(char) {
            const slashThroughChars = {
                'A': '𝙰̷',
                'B': '𝙱̷',
                'C': '𝙲̷',
                'D': '𝙳̷',
                'E': '𝙴̷',
                'F': '𝙵̷',
                'G': '𝙶̷',
                'H': '𝙷̷',
                'I': '𝙸̷',
                'J': '𝙹̷',
                'K': '𝙺̷',
                'L': '𝙻̷',
                'M': '𝙼̷',
                'N': '𝙽̷',
                'O': '𝙾̷',
                'P': '𝙿̷',
                'Q': '𝚀̷',
                'R': '𝚁̷',
                'S': '𝚂̷',
                'T': '𝚃̷',
                'U': '𝚄̷',
                'V': '𝚅̷',
                'W': '𝚆̷',
                'X': '𝚇̷',
                'Y': '𝚈̷',
                'Z': '𝚉̷',
                'a': '𝚊̷',
                'b': '𝚋̷',
                'c': '𝚌̷',
                'd': '𝚍̷',
                'e': '𝚎̷',
                'f': '𝚏̷',
                'g': '𝚐̷',
                'h': '𝚑̷',
                'i': '𝚒̷',
                'j': '𝚓̷',
                'k': '𝚔̷',
                'l': '𝚕̷',
                'm': '𝚖̷',
                'n': '𝚗̷',
                'o': '𝚘̷',
                'p': '𝚙̷',
                'q': '𝚚̷',
                'r': '𝚛̷',
                's': '𝚜̷',
                't': '𝚝̷',
                'u': '𝚞̷',
                'v': '𝚟̷',
                'w': '𝚠̷',
                'x': '𝚡̷',
                'y': '𝚢̷',
                'z': '𝚣̷'
            };
            return slashThroughChars[char] || char;
        }

        function getTopBottomChar(char) {
            const topBottomChars = {
                'A': 'A̲̅',
                'B': 'B̲̅',
                'C': 'C̲̅',
                'D': 'D̲̅',
                'E': 'E̲̅',
                'F': 'F̲̅',
                'G': 'G̲̅',
                'H': 'H̲̅',
                'I': 'I̲̅',
                'J': 'J̲̅',
                'K': 'K̲̅',
                'L': 'L̲̅',
                'M': 'M̲̅',
                'N': 'N̲̅',
                'O': 'O̲̅',
                'P': 'P̲̅',
                'Q': 'Q̲̅',
                'R': 'R̲̅',
                'S': 'S̲̅',
                'T': 'T̲̅',
                'U': 'U̲̅',
                'V': 'V̲̅',
                'W': 'W̲̅',
                'X': 'X̲̅',
                'Y': 'Y̲̅',
                'Z': 'Z̲̅',
                'a': 'a̲̅',
                'b': 'b̲̅',
                'c': 'c̲̅',
                'd': 'd̲̅',
                'e': 'e̲̅',
                'f': 'f̲̅',
                'g': 'g̲̅',
                'h': 'h̲̅',
                'i': 'i̲̅',
                'j': 'j̲̅',
                'k': 'k̲̅',
                'l': 'l̲̅',
                'm': 'm̲̅',
                'n': 'n̲̅',
                'o': 'o̲̅',
                'p': 'p̲̅',
                'q': 'q̲̅',
                'r': 'r̲̅',
                's': 's̲̅',
                't': 't̲̅',
                'u': 'u̲̅',
                'v': 'v̲̅',
                'w': 'w̲̅',
                'x': 'x̲̅',
                'y': 'y̲̅',
                'z': 'z̲̅'
            };
            return topBottomChars[char] || char;
        }

        function getDoubleOverlineChar(char) {
            const doubleOverlineChars = {
                'A': 'A̿',
                'B': 'B̿',
                'C': 'C̿',
                'D': 'D̿',
                'E': 'E̿',
                'F': 'F̿',
                'G': 'G̿',
                'H': 'H̿',
                'I': 'I̿',
                'J': 'J̿',
                'K': 'K̿',
                'L': 'L̿',
                'M': 'M̿',
                'N': 'N̿',
                'O': 'O̿',
                'P': 'P̿',
                'Q': 'Q̿',
                'R': 'R̿',
                'S': 'S̿',
                'T': 'T̿',
                'U': 'U̿',
                'V': 'V̿',
                'W': 'W̿',
                'X': 'X̿',
                'Y': 'Y̿',
                'Z': 'Z̿',
                'a': 'a̿',
                'b': 'b̿',
                'c': 'c̿',
                'd': 'd̿',
                'e': 'e̿',
                'f': 'f̿',
                'g': 'g̿',
                'h': 'h̿',
                'i': 'i̿',
                'j': 'j̿',
                'k': 'k̿',
                'l': 'l̿',
                'm': 'm̿',
                'n': 'n̿',
                'o': 'o̿',
                'p': 'p̿',
                'q': 'q̿',
                'r': 'r̿',
                's': 's̿',
                't': 't̿',
                'u': 'u̿',
                'v': 'v̿',
                'w': 'w̿',
                'x': 'x̿',
                'y': 'y̿',
                'z': 'z̿'
            };
            return doubleOverlineChars[char] || char;
        }

        function getArrowUnderlineChar(char) {
            const arrowUnderlineChars = {
                'A': 'A͢',
                'B': 'B͢',
                'C': 'C͢',
                'D': 'D͢',
                'E': 'E͢',
                'F': 'F͢',
                'G': 'G͢',
                'H': 'H͢',
                'I': 'I͢',
                'J': 'J͢',
                'K': 'K͢',
                'L': 'L͢',
                'M': 'M͢',
                'N': 'N͢',
                'O': 'O͢',
                'P': 'P͢',
                'Q': 'Q͢',
                'R': 'R͢',
                'S': 'S͢',
                'T': 'T͢',
                'U': 'U͢',
                'V': 'V͢',
                'W': 'W͢',
                'X': 'X͢',
                'Y': 'Y͢',
                'Z': 'Z͢',
                'a': 'a͢',
                'b': 'b͢',
                'c': 'c͢',
                'd': 'd͢',
                'e': 'e͢',
                'f': 'f͢',
                'g': 'g͢',
                'h': 'h͢',
                'i': 'i͢',
                'j': 'j͢',
                'k': 'k͢',
                'l': 'l͢',
                'm': 'm͢',
                'n': 'n͢',
                'o': 'o͢',
                'p': 'p͢',
                'q': 'q͢',
                'r': 'r͢',
                's': 's͢',
                't': 't͢',
                'u': 'u͢',
                'v': 'v͢',
                'w': 'w͢',
                'x': 'x͢',
                'y': 'y͢',
                'z': 'z͢'
            };
            return arrowUnderlineChars[char] || char;
        }

        function getStrangeLookChar(char) {
            const strangeLookChars = {
                'A': 'ค',
                'B': '๒',
                'C': 'ς',
                'D': '๔',
                'E': 'є',
                'F': 'Ŧ',
                'G': 'ﻮ',
                'H': 'ђ',
                'I': 'เ',
                'J': 'ן',
                'K': 'к',
                'L': 'ɭ',
                'M': '๓',
                'N': 'ภ',
                'O': '๏',
                'P': 'ק',
                'Q': 'ợ',
                'R': 'г',
                'S': 'ร',
                'T': 'Շ',
                'U': 'ย',
                'V': 'ש',
                'W': 'ฬ',
                'X': 'א',
                'Y': 'ץ',
                'Z': 'չ',
                'a': 'ค',
                'b': '๒',
                'c': 'ς',
                'd': '๔',
                'e': 'є',
                'f': 'Ŧ',
                'g': 'ﻮ',
                'h': 'ђ',
                'i': 'เ',
                'j': 'ן',
                'k': 'к',
                'l': 'ɭ',
                'm': '๓',
                'n': 'ภ',
                'o': '๏',
                'p': 'ק',
                'q': 'ợ',
                'r': 'г',
                's': 'ร',
                't': 'Շ',
                'u': 'ย',
                'v': 'ש',
                'w': 'ฬ',
                'x': 'א',
                'y': 'ץ',
                'z': 'չ'
            };
            return strangeLookChars[char] || char;
        }

        function getZombiesChar(char) {
            const zombiesChars = {
                'A': 'ǟ',
                'B': 'ɮ',
                'C': 'ƈ',
                'D': 'ɖ',
                'E': 'ɛ',
                'F': 'ʄ',
                'G': 'ɢ',
                'H': 'ɦ',
                'I': 'ɨ',
                'J': 'ʝ',
                'K': 'ӄ',
                'L': 'ʟ',
                'M': 'ʍ',
                'N': 'Ն',
                'O': 'օ',
                'P': 'ք',
                'Q': 'զ',
                'R': 'ʀ',
                'S': 'ֆ',
                'T': 'ȶ',
                'U': 'ʊ',
                'V': 'ʋ',
                'W': 'ա',
                'X': 'Ӽ',
                'Y': 'ʏ',
                'Z': 'ʐ',
                'a': 'ǟ',
                'b': 'ɮ',
                'c': 'ƈ',
                'd': 'ɖ',
                'e': 'ɛ',
                'f': 'ʄ',
                'g': 'ɢ',
                'h': 'ɦ',
                'i': 'ɨ',
                'j': 'ʝ',
                'k': 'ӄ',
                'l': 'ʟ',
                'm': 'ʍ',
                'n': 'Ն',
                'o': 'օ',
                'p': 'ք',
                'q': 'զ',
                'r': 'ʀ',
                's': 'ֆ',
                't': 'ȶ',
                'u': 'ʊ',
                'v': 'ʋ',
                'w': 'ա',
                'x': 'Ӽ',
                'y': 'ʏ',
                'z': 'ʐ'
            };
            return zombiesChars[char] || char; // Return the character if not found in the mapping
        }

        function getCreepyChar(char) {
            const creepyChars = {
                'A': 'Ă',
                'B': 'β',
                'C': 'Č',
                'D': 'Ď',
                'E': 'Ĕ',
                'F': 'Ŧ',
                'G': 'Ğ',
                'H': 'Ĥ',
                'I': 'Ĩ',
                'J': 'Ĵ',
                'K': 'Ķ',
                'L': 'Ĺ',
                'M': 'М',
                'N': 'Ń',
                'O': 'Ő',
                'P': 'Р',
                'Q': 'Q',
                'R': 'Ŕ',
                'S': 'Ś',
                'T': 'Ť',
                'U': 'Ú',
                'V': 'V',
                'W': 'Ŵ',
                'X': 'Ж',
                'Y': 'Ŷ',
                'Z': 'Ź',
                'a': 'ă',
                'b': 'β',
                'c': 'č',
                'd': 'ď',
                'e': 'ĕ',
                'f': 'Ŧ',
                'g': 'ğ',
                'h': 'ĥ',
                'i': 'ĩ',
                'j': 'ĵ',
                'k': 'ķ',
                'l': 'ĺ',
                'm': 'м',
                'n': 'ń',
                'o': 'ő',
                'p': 'р',
                'q': 'q',
                'r': 'ŕ',
                's': 'ś',
                't': 'ť',
                'u': 'ú',
                'v': 'v',
                'w': 'ŵ',
                'x': 'ж',
                'y': 'ŷ',
                'z': 'ź'
            };
            return creepyChars[char] || char;
        }

        function getMysteriousChar(char) {
            const mysteriousChars = {
                'A': 'A҉',
                'B': 'B҉',
                'C': 'C҉',
                'D': 'D҉',
                'E': 'E҉',
                'F': 'F҉',
                'G': 'G҉',
                'H': 'H҉',
                'I': 'I҉',
                'J': 'J҉',
                'K': 'K҉',
                'L': 'L҉',
                'M': 'M҉',
                'N': 'N҉',
                'O': 'O҉',
                'P': 'P҉',
                'Q': 'Q҉',
                'R': 'R҉',
                'S': 'S҉',
                'T': 'T҉',
                'U': 'U҉',
                'V': 'V҉',
                'W': 'W҉',
                'X': 'X҉',
                'Y': 'Y҉',
                'Z': 'Z҉',
                'a': 'a҉',
                'b': 'b҉',
                'c': 'c҉',
                'd': 'd҉',
                'e': 'e҉',
                'f': 'f҉',
                'g': 'g҉',
                'h': 'h҉',
                'i': 'i҉',
                'j': 'j҉',
                'k': 'k҉',
                'l': 'l҉',
                'm': 'm҉',
                'n': 'n҉',
                'o': 'o҉',
                'p': 'p҉',
                'q': 'q҉',
                'r': 'r҉',
                's': 's҉',
                't': 't҉',
                'u': 'u҉',
                'v': 'v҉',
                'w': 'w҉',
                'x': 'x҉',
                'y': 'y҉',
                'z': 'z҉'
            };
            return mysteriousChars[char] || char;
        }


        function getBizarreChar(char) {
            const bizarreChars = {
                'A': 'A̾',
                'B': 'B̾',
                'C': 'C̾',
                'D': 'D̾',
                'E': 'E̾',
                'F': 'F̾',
                'G': 'G̾',
                'H': 'H̾',
                'I': 'I̾',
                'J': 'J̾',
                'K': 'K̾',
                'L': 'L̾',
                'M': 'M̾',
                'N': 'N̾',
                'O': 'O̾',
                'P': 'P̾',
                'Q': 'Q̾',
                'R': 'R̾',
                'S': 'S̾',
                'T': 'T̾',
                'U': 'U̾',
                'V': 'V̾',
                'W': 'W̾',
                'X': 'X̾',
                'Y': 'Y̾',
                'Z': 'Z̾',
                'a': 'a̾',
                'b': 'b̾',
                'c': 'c̾',
                'd': 'd̾',
                'e': 'e̾',
                'f': 'f̾',
                'g': 'g̾',
                'h': 'h̾',
                'i': 'i̾',
                'j': 'j̾',
                'k': 'k̾',
                'l': 'l̾',
                'm': 'm̾',
                'n': 'n̾',
                'o': 'o̾',
                'p': 'p̾',
                'q': 'q̾',
                'r': 'r̾',
                's': 's̾',
                't': 't̾',
                'u': 'u̾',
                'v': 'v̾',
                'w': 'w̾',
                'x': 'x̾',
                'y': 'y̾',
                'z': 'z̾'
            };
            return bizarreChars[char] || char;
        }

        function getGlitchChar(char) {
            const glitchChars = {
                'A': 'A̵̡͍͍̿͐͝',
                'B': 'B̵̪̝̙̓͐̾',
                'C': 'C̸̝͉͉̿͛̈́',
                'D': 'D̵̘̻͍̈́͑͝',
                'E': 'E̵̟̪͉̿̾͝',
                'F': 'F̴͖͚͒̿͜',
                'G': 'G̸̢̠͕̈́̽͝',
                'H': 'H̸̼͓͍̔͝͝',
                'I': 'I̴͇͖͔͋̐̓',
                'J': 'J̵͍͍̓̽̕͜',
                'K': 'K̸̫͎̘̈́̈́͠',
                'L': 'L̴̡͚͚͊̽͝',
                'M': 'M̵̺̦͇̒̐͠',
                'N': 'N̴͓͚̼̒̈́́',
                'O': 'O̵̟̪̫̔͆͘',
                'P': 'P̴͙̝͔̒͝',
                'Q': 'Q̸̡̡͓͒̽̿',
                'R': 'R̵̻̙͓̒͋̾',
                'S': 'S̴̡͉̼̐̒̈́',
                'T': 'T̸̪̦̼̒̔͠',
                'U': 'U̵̝̝̼̐́͑',
                'V': 'V̵͙͎͇͑͆̕',
                'W': 'Ẁ̵̙̫͓̐͠',
                'X': 'X̸̢̟͔̽͑̽',
                'Y': 'Y̸͎͖̞̾̈́͘',
                'Z': 'Ź̵̦͙̓͜͝',
                'a': 'ä̸͎̼͍́́͐',
                'b': 'b̸͉̦̐̒',
                'c': 'c̴̺͆̿͜͠',
                'd': 'd̸͉̘̠͐̒̈́',
                'e': 'e̴̢͚͙͆͛̒',
                'f': 'f̸͓͓̈́͌͝',
                'g': 'g̸̺̪͍͛̐',
                'h': 'h̴̪͕͍͒͒͝',
                'i': 'i̴̦̙͕̿̿͠',
                'j': 'j̸̘͕̪̒̒͘',
                'k': 'k̸̺̘͔̽́̐',
                'l': 'l̵͍̝͛͑͘',
                'm': 'm̴͇̺̿̈́̚',
                'n': 'n̸̝͚͕͆͒̒',
                'o': 'ö̸̢͕̙́͛̒',
                'p': 'p̴̞̼̪̀́',
                'q': 'q̴͚̠͑̕͠',
                'r': 'r̴̺͙̓͌͒',
                's': 's̵̢͙͖̔͑͌',
                't': 't̸͎͚̦̀͒͝',
                'u': 'u̴͚͑̒͜',
                'v': 'v̸̙͕͍̓͑́',
                'w': 'w̴͕̙͋̈́͠',
                'x': 'x̸̠͆͆̾͜',
                'y': 'y̵̻̺̒̔͜͠',
                'z': 'z̵͚͓̒̐͛͜'
            };
            return glitchChars[char] || char;
        }

        function getHalloweenChar(char) {
            const halloweenChars = {
                'A': 'A͉͔͍',
                'B': 'B͙͙̙',
                'C': 'C̫͕͍',
                'D': 'D̟͎̞',
                'E': 'E̟͔͍',
                'F': 'F̢͎̝',
                'G': 'G͓̙̝',
                'H': 'H͓̠̺',
                'I': 'I̢͔͕',
                'J': 'J̪̺',
                'K': 'K͓̦͍',
                'L': 'L̡̺͎',
                'M': 'M̟̞̻',
                'N': 'N͉͓̫',
                'O': 'O̟͓̺',
                'P': 'P̡̟̞',
                'Q': 'Q̼̪̠',
                'R': 'R̡̠͓',
                'S': 'S̢͔̘',
                'T': 'T͇͇̘',
                'U': 'U͍̦͓',
                'V': 'V̘̠͍',
                'W': 'W̻͇͔',
                'X': 'X̪͜',
                'Y': 'Y̠͚͜',
                'Z': 'Z͉͜',
                'a': 'a̢͖͜',
                'b': 'b̝̠͉',
                'c': 'c͔̟͍',
                'd': 'd̡̼̝',
                'e': 'e̢͉͙',
                'f': 'f̺͔̞',
                'g': 'g̡̞̝',
                'h': 'h̻͎',
                'i': 'i͕̙',
                'j': 'j͉͙͇',
                'k': 'k̢̟͎',
                'l': 'l̘͕̦',
                'm': 'm͔͉͜',
                'n': 'n̟̪̝',
                'o': 'o͔̺̼',
                'p': 'p͙͙̘',
                'q': 'q̟̺̻',
                'r': 'r̢̡̘',
                's': 's͓̦',
                't': 't͙̠̘',
                'u': 'u̦̠̫',
                'v': 'v̻̦͍',
                'w': 'w̺̼̞',
                'x': 'x̼͖̞',
                'y': 'y̫͚͜',
                'z': 'z͍͔͔'
            };
            return halloweenChars[char] || char;
        }

        function getFreakyChar(char) {
            const freakyChars = {
                'A': 'A̔͘',
                'B': 'B̐̈́̿',
                'C': 'C̾͘͠',
                'D': 'D̽̈́̾',
                'E': 'E͋̕',
                'F': 'F̓̓',
                'G': 'G͛̀͘',
                'H': 'H͊̚̕',
                'I': 'I͒̿',
                'J': 'J̒͘͠',
                'K': 'K̐͘͝',
                'L': 'L͊̒̽',
                'M': 'M͋̚',
                'N': 'N͛̈́̈́',
                'O': 'O͒͘̚',
                'P': 'P̈́͘͝',
                'Q': 'Q̈́̀͝',
                'R': 'R̿̾͝',
                'S': 'S͆͌̕',
                'T': 'T͒̈́͊',
                'U': 'U̽͝',
                'V': 'V̓̀͝',
                'W': 'W͌͒͒',
                'X': 'X̽̒͘',
                'Y': 'Y͒͋̽',
                'Z': 'Z̀̐̚',
                'a': 'a͑̽͆',
                'b': 'b͊͒̿',
                'c': 'c̐̕',
                'd': 'd̀̿̔',
                'e': 'e͌̔',
                'f': 'f̐̈́͊',
                'g': 'g͋̓̚',
                'h': 'h̒͒̔',
                'i': 'i͌̓',
                'j': 'j̈́̈́',
                'k': 'k͋͋̚',
                'l': 'l͒̀̔',
                'm': 'm̓̓͐',
                'n': 'n̓̈́͝',
                'o': 'o͌̽͛',
                'p': 'p̓́̿',
                'q': 'q̔͑͘',
                'r': 'r̓̈́',
                's': 'ś̈́͠',
                't': 't̐͌̀',
                'u': 'u͋̔̐',
                'v': 'v͋̓̚',
                'w': 'w̾͘͝',
                'x': 'x͐͆̕',
                'y': 'y͐͛͒',
                'z': 'z̀͒̚'
            };
            return freakyChars[char] || char;
        }


        function getScratchChar(char) {
            const scratchChars = {
                'A': 'ค',
                'B': '๒',
                'C': 'ς',
                'D': '๔',
                'E': 'є',
                'F': 'Ŧ',
                'G': 'ﻮ',
                'H': 'ђ',
                'I': 'เ',
                'J': 'ן',
                'K': 'к',
                'L': 'ɭ',
                'M': '๓',
                'N': 'ภ',
                'O': '๏',
                'P': 'ק',
                'Q': 'ợ',
                'R': 'г',
                'S': 'ร',
                'T': 'Շ',
                'U': 'ย',
                'V': 'ש',
                'W': 'ฬ',
                'X': 'א',
                'Y': 'ץ',
                'Z': 'չ',
                'a': 'ค',
                'b': '๒',
                'c': 'ς',
                'd': '๔',
                'e': 'є',
                'f': 'Ŧ',
                'g': 'ﻮ',
                'h': 'ђ',
                'i': 'เ',
                'j': 'ן',
                'k': 'к',
                'l': 'ɭ',
                'm': '๓',
                'n': 'ภ',
                'o': '๏',
                'p': 'ק',
                'q': 'ợ',
                'r': 'г',
                's': 'ร',
                't': 'Շ',
                'u': 'ย',
                'v': 'ש',
                'w': 'ฬ',
                'x': 'א',
                'y': 'ץ',
                'z': 'չ'
            };
            return scratchChars[char] || char;
        }

        function getDoodleChar(char) {
            const doodleChars = {
                'A': 'ą',
                'B': 'ც',
                'C': 'ƈ',
                'D': 'ɖ',
                'E': 'ɛ',
                'F': 'ʄ',
                'G': 'ɠ',
                'H': 'ɧ',
                'I': 'ı',
                'J': 'ʝ',
                'K': 'ƙ',
                'L': 'Ɩ',
                'M': 'ɱ',
                'N': 'ŋ',
                'O': 'ơ',
                'P': '℘',
                'Q': 'զ',
                'R': 'ཞ',
                'S': 'ʂ',
                'T': 'ɬ',
                'U': 'ų',
                'V': '۷',
                'W': 'ῳ',
                'X': 'ҳ',
                'Y': 'ყ',
                'Z': 'ʑ',
                'a': 'ą',
                'b': 'ც',
                'c': 'ƈ',
                'd': 'ɖ',
                'e': 'ɛ',
                'f': 'ʄ',
                'g': 'ɠ',
                'h': 'ɧ',
                'i': 'ı',
                'j': 'ʝ',
                'k': 'ƙ',
                'l': 'Ɩ',
                'm': 'ɱ',
                'n': 'ŋ',
                'o': 'ơ',
                'p': '℘',
                'q': 'զ',
                'r': 'ཞ',
                's': 'ʂ',
                't': 'ɬ',
                'u': 'ų',
                'v': '۷',
                'w': 'ῳ',
                'x': 'ҳ',
                'y': 'ყ',
                'z': 'ʑ'
            };
            return doodleChars[char] || char;
        }

        function getPencilChar(char) {
            const pencilChars = {
                'A': 'Λ',
                'B': 'Ϧ',
                'C': 'ㄈ',
                'D': 'Ð',
                'E': 'Ɛ',
                'F': 'F',
                'G': 'Ɠ',
                'H': 'н',
                'I': 'ɪ',
                'J': 'ﾌ',
                'K': 'Қ',
                'L': 'Ł',
                'M': '௱',
                'N': 'Л',
                'O': 'Ø',
                'P': 'þ',
                'Q': 'Ҩ',
                'R': '尺',
                'S': 'ら',
                'T': 'Ť',
                'U': 'Ц',
                'V': 'Ɣ',
                'W': 'Ɯ',
                'X': 'χ',
                'Y': 'Ϥ',
                'Z': 'Ẕ',
                'a': 'Λ',
                'b': 'Ϧ',
                'c': 'ㄈ',
                'd': 'Ð',
                'e': 'Ɛ',
                'f': 'F',
                'g': 'Ɠ',
                'h': 'н',
                'i': 'ɪ',
                'j': 'ﾌ',
                'k': 'Қ',
                'l': 'Ł',
                'm': '௱',
                'n': 'Л',
                'o': 'Ø',
                'p': 'þ',
                'q': 'Ҩ',
                'r': '尺',
                's': 'ら',
                't': 'Ť',
                'u': 'Ц',
                'v': 'Ɣ',
                'w': 'Ɯ',
                'x': 'χ',
                'y': 'Ϥ',
                'z': 'Ẕ'
            };
            return pencilChars[char] || char;
        }

        function getScribbleChar(char) {
            const scribbleChars = {
                'A': 'Թ',
                'B': 'Յ',
                'C': 'Շ',
                'D': 'Ժ',
                'E': 'ȝ',
                'F': 'Բ',
                'G': 'Գ',
                'H': 'ɧ',
                'I': 'ɿ',
                'J': 'ʝ',
                'K': 'ƙ',
                'L': 'ʅ',
                'M': 'ʍ',
                'N': 'Ռ',
                'O': 'Ծ',
                'P': 'ρ',
                'Q': 'φ',
                'R': 'Ր',
                'S': 'Տ',
                'T': 'Ե',
                'U': 'Մ',
                'V': 'ע',
                'W': 'ա',
                'X': 'Ճ',
                'Y': 'Վ',
                'Z': 'Հ',
                'a': 'Թ',
                'b': 'Յ',
                'c': 'Շ',
                'd': 'Ժ',
                'e': 'ȝ',
                'f': 'Բ',
                'g': 'Գ',
                'h': 'ɧ',
                'i': 'ɿ',
                'j': 'ʝ',
                'k': 'ƙ',
                'l': 'ʅ',
                'm': 'ʍ',
                'n': 'Ռ',
                'o': 'Ծ',
                'p': 'ρ',
                'q': 'φ',
                'r': 'Ր',
                's': 'Տ',
                't': 'Ե',
                'u': 'Մ',
                'v': 'ע',
                'w': 'ա',
                'x': 'Ճ',
                'y': 'Վ',
                'z': 'Հ'
            };
            return scribbleChars[char] || char;
        }

        function getCurlicueChar(char) {
            const curlicueChars = {
                'A': 'ƛ',
                'B': 'Ɓ',
                'C': 'Ƈ',
                'D': 'Ɗ',
                'E': 'Є',
                'F': 'Ƒ',
                'G': 'Ɠ',
                'H': 'Ӈ',
                'I': 'Ɩ',
                'J': 'ʆ',
                'K': 'Ƙ',
                'L': 'Լ',
                'M': 'M',
                'N': 'Ɲ',
                'O': 'Ơ',
                'P': 'Ƥ',
                'Q': 'Ƣ',
                'R': 'Ʀ',
                'S': 'Ƨ',
                'T': 'Ƭ',
                'U': 'Ʋ',
                'V': 'Ɣ',
                'W': 'Ɯ',
                'X': 'Х',
                'Y': 'Ƴ',
                'Z': 'Ȥ',
                'a': 'ƛ',
                'b': 'Ɓ',
                'c': 'Ƈ',
                'd': 'Ɗ',
                'e': 'Є',
                'f': 'Ƒ',
                'g': 'Ɠ',
                'h': 'Ӈ',
                'i': 'Ɩ',
                'j': 'ʆ',
                'k': 'Ƙ',
                'l': 'Լ',
                'm': 'M',
                'n': 'Ɲ',
                'o': 'Ơ',
                'p': 'Ƥ',
                'q': 'Ƣ',
                'r': 'Ʀ',
                's': 'Ƨ',
                't': 'Ƭ',
                'u': 'Ʋ',
                'v': 'Ɣ',
                'w': 'Ɯ',
                'x': 'Х',
                'y': 'Ƴ',
                'z': 'Ȥ'
            };
            return curlicueChars[char] || char;
        }

        function getdrawnChar(char) {
            const drawnChars = {
                'A': 'A͓̽',
                'B': 'B͓̽',
                'C': 'C͓̽',
                'D': 'D͓̽',
                'E': 'E͓̽',
                'F': 'F͓̽',
                'G': 'G͓̽',
                'H': 'H͓̽',
                'I': 'I͓̽',
                'J': 'J͓̽',
                'K': 'K͓̽',
                'L': 'L͓̽',
                'M': 'M͓̽',
                'N': 'N͓̽',
                'O': 'O͓̽',
                'P': 'P͓̽',
                'Q': 'Q͓̽',
                'R': 'R͓̽',
                'S': 'S͓̽',
                'T': 'T͓̽',
                'U': 'U͓̽',
                'V': 'V͓̽',
                'W': 'W͓̽',
                'X': 'X͓̽',
                'Y': 'Y͓̽',
                'Z': 'Z͓̽',
                'a': 'a͓̽',
                'b': 'b͓̽',
                'c': 'c͓̽',
                'd': 'd͓̽',
                'e': 'e͓̽',
                'f': 'f͓̽',
                'g': 'g͓̽',
                'h': 'h͓̽',
                'i': 'i͓̽',
                'j': 'j͓̽',
                'k': 'k͓̽',
                'l': 'l͓̽',
                'm': 'm͓̽',
                'n': 'n͓̽',
                'o': 'o͓̽',
                'p': 'p͓̽',
                'q': 'q͓̽',
                'r': 'r͓̽',
                's': 's͓̽',
                't': 't͓̽',
                'u': 'u͓̽',
                'v': 'v͓̽',
                'w': 'w͓̽',
                'x': 'x͓̽',
                'y': 'y͓̽',
                'z': 'z͓̽'
            };
            return drawnChars[char] || char;
        }

        function getSurroundedChar(char) {
            const surroundedChars = {
                'A': '⧼A̼⧽',
                'B': '⧼B̼⧽',
                'C': '⧼C̼⧽',
                'D': '⧼D̼⧽',
                'E': '⧼E̼⧽',
                'F': '⧼F̼⧽',
                'G': '⧼G̼⧽',
                'H': '⧼H̼⧽',
                'I': '⧼I̼⧽',
                'J': '⧼J̼⧽',
                'K': '⧼K̼⧽',
                'L': '⧼L̼⧽',
                'M': '⧼M̼⧽',
                'N': '⧼N̼⧽',
                'O': '⧼O̼⧽',
                'P': '⧼P̼⧽',
                'Q': '⧼Q̼⧽',
                'R': '⧼R̼⧽',
                'S': '⧼S̼⧽',
                'T': '⧼T̼⧽',
                'U': '⧼U̼⧽',
                'V': '⧼V̼⧽',
                'W': '⧼W̼⧽',
                'X': '⧼X̼⧽',
                'Y': '⧼Y̼⧽',
                'Z': '⧼Z̼⧽',
                'a': '⧼a̼⧽',
                'b': '⧼b̼⧽',
                'c': '⧼c̼⧽',
                'd': '⧼d̼⧽',
                'e': '⧼e̼⧽',
                'f': '⧼f̼⧽',
                'g': '⧼g̼⧽',
                'h': '⧼h̼⧽',
                'i': '⧼i̼⧽',
                'j': '⧼j̼⧽',
                'k': '⧼k̼⧽',
                'l': '⧼l̼⧽',
                'm': '⧼m̼⧽',
                'n': '⧼n̼⧽',
                'o': '⧼o̼⧽',
                'p': '⧼p̼⧽',
                'q': '⧼q̼⧽',
                'r': '⧼r̼⧽',
                's': '⧼s̼⧽',
                't': '⧼t̼⧽',
                'u': '⧼u̼⧽',
                'v': '⧼v̼⧽',
                'w': '⧼w̼⧽',
                'x': '⧼x̼⧽',
                'y': '⧼y̼⧽',
                'z': '⧼z̼⧽'
            };
            return surroundedChars[char] || char;
        }

        function getFencedChar(char) {
            const fencedChars = {
                'A': '[A̲̅]',
                'B': '[B̲̅]',
                'C': '[C̲̅]',
                'D': '[D̲̅]',
                'E': '[E̲̅]',
                'F': '[F̲̅]',
                'G': '[G̲̅]',
                'H': '[H̲̅]',
                'I': '[I̲̅]',
                'J': '[J̲̅]',
                'K': '[K̲̅]',
                'L': '[L̲̅]',
                'M': '[M̲̅]',
                'N': '[N̲̅]',
                'O': '[O̲̅]',
                'P': '[P̲̅]',
                'Q': '[Q̲̅]',
                'R': '[R̲̅]',
                'S': '[S̲̅]',
                'T': '[T̲̅]',
                'U': '[U̲̅]',
                'V': '[V̲̅]',
                'W': '[W̲̅]',
                'X': '[X̲̅]',
                'Y': '[Y̲̅]',
                'Z': '[Z̲̅]',
                'a': '[a̲̅]',
                'b': '[b̲̅]',
                'c': '[c̲̅]',
                'd': '[d̲̅]',
                'e': '[e̲̅]',
                'f': '[f̲̅]',
                'g': '[g̲̅]',
                'h': '[h̲̅]',
                'i': '[i̲̅]',
                'j': '[j̲̅]',
                'k': '[k̲̅]',
                'l': '[l̲̅]',
                'm': '[m̲̅]',
                'n': '[n̲̅]',
                'o': '[o̲̅]',
                'p': '[p̲̅]',
                'q': '[q̲̅]',
                'r': '[r̲̅]',
                's': '[s̲̅]',
                't': '[t̲̅]',
                'u': '[u̲̅]',
                'v': '[v̲̅]',
                'w': '[w̲̅]',
                'x': '[x̲̅]',
                'y': '[y̲̅]',
                'z': '[z̲̅]'
            };
            return fencedChars[char] || char;
        }

        function getThickBoxChar(char) {
            const thickBoxChars = {
                'A': '⟦A⟧',
                'B': '⟦B⟧',
                'C': '⟦C⟧',
                'D': '⟦D⟧',
                'E': '⟦E⟧',
                'F': '⟦F⟧',
                'G': '⟦G⟧',
                'H': '⟦H⟧',
                'I': '⟦I⟧',
                'J': '⟦J⟧',
                'K': '⟦K⟧',
                'L': '⟦L⟧',
                'M': '⟦M⟧',
                'N': '⟦N⟧',
                'O': '⟦O⟧',
                'P': '⟦P⟧',
                'Q': '⟦Q⟧',
                'R': '⟦R⟧',
                'S': '⟦S⟧',
                'T': '⟦T⟧',
                'U': '⟦U⟧',
                'V': '⟦V⟧',
                'W': '⟦W⟧',
                'X': '⟦X⟧',
                'Y': '⟦Y⟧',
                'Z': '⟦Z⟧',
                'a': '⟦a⟧',
                'b': '⟦b⟧',
                'c': '⟦c⟧',
                'd': '⟦d⟧',
                'e': '⟦e⟧',
                'f': '⟦f⟧',
                'g': '⟦g⟧',
                'h': '⟦h⟧',
                'i': '⟦i⟧',
                'j': '⟦j⟧',
                'k': '⟦k⟧',
                'l': '⟦l⟧',
                'm': '⟦m⟧',
                'n': '⟦n⟧',
                'o': '⟦o⟧',
                'p': '⟦p⟧',
                'q': '⟦q⟧',
                'r': '⟦r⟧',
                's': '⟦s⟧',
                't': '⟦t⟧',
                'u': '⟦u⟧',
                'v': '⟦v⟧',
                'w': '⟦w⟧',
                'x': '⟦x⟧',
                'y': '⟦y⟧',
                'z': '⟦z⟧'
            };
            return thickBoxChars[char] || char;
        }

        function getIntegralChar(char) {
            const integralChars = {
                'A': '⌠A⌡',
                'B': '⌠B⌡',
                'C': '⌠C⌡',
                'D': '⌠D⌡',
                'E': '⌠E⌡',
                'F': '⌠F⌡',
                'G': '⌠G⌡',
                'H': '⌠H⌡',
                'I': '⌠I⌡',
                'J': '⌠J⌡',
                'K': '⌠K⌡',
                'L': '⌠L⌡',
                'M': '⌠M⌡',
                'N': '⌠N⌡',
                'O': '⌠O⌡',
                'P': '⌠P⌡',
                'Q': '⌠Q⌡',
                'R': '⌠R⌡',
                'S': '⌠S⌡',
                'T': '⌠T⌡',
                'U': '⌠U⌡',
                'V': '⌠V⌡',
                'W': '⌠W⌡',
                'X': '⌠X⌡',
                'Y': '⌠Y⌡',
                'Z': '⌠Z⌡',
                'a': '⌠a⌡',
                'b': '⌠b⌡',
                'c': '⌠c⌡',
                'd': '⌠d⌡',
                'e': '⌠e⌡',
                'f': '⌠f⌡',
                'g': '⌠g⌡',
                'h': '⌠h⌡',
                'i': '⌠i⌡',
                'j': '⌠j⌡',
                'k': '⌠k⌡',
                'l': '⌠l⌡',
                'm': '⌠m⌡',
                'n': '⌠n⌡',
                'o': '⌠o⌡',
                'p': '⌠p⌡',
                'q': '⌠q⌡',
                'r': '⌠r⌡',
                's': '⌠s⌡',
                't': '⌠t⌡',
                'u': '⌠u⌡',
                'v': '⌠v⌡',
                'w': '⌠w⌡',
                'x': '⌠x⌡',
                'y': '⌠y⌡',
                'z': '⌠z⌡'
            };
            return integralChars[char] || char;
        }

        function getMoonChar(char) {
            return `☾${char}☽`;
        }

        function getTibetanChar(char) {
            return `࿙${char}࿚`;
        }

        function getBracketChar(char) {
            return `⁅${char}⁆`;
        }

        function getHousedChar(char) {
            return `⊹ ${char} `;
        }

        function getFountainChar(char) {
            return `☑ ${char} `;
        }

        function getPrettifiedChar(char) {
            return `ミ★ ${char} ★彡`;
        }

        function getStarLinedChar(char) {
            return `- ${char} `;
        }

        function getRectanglesidefadeChar(char) {
            const RectanglesidefadeChars = {
                'A': 'Ꭿ',
                'B': 'Ᏸ',
                'C': 'Ꮸ',
                'D': 'Ꭰ',
                'E': 'Ꭼ',
                'F': 'Ꮀ',
                'G': 'Ꮆ',
                'H': 'Ꮋ',
                'I': 'Ꭸ',
                'J': 'Ꮰ',
                'K': 'Ꮶ',
                'L': 'Ꮭ',
                'M': 'Ꮇ',
                'N': 'Ꮑ',
                'O': 'Ꮎ',
                'P': 'Ꮲ',
                'Q': 'Ꮕ',
                'R': 'Ꮢ',
                'S': 'Ꮥ',
                'T': 'Ꮦ',
                'U': 'Ꮼ',
                'V': 'Ꮙ',
                'W': 'Ꮿ',
                'X': 'Ꮂ',
                'Y': 'Ꮍ',
                'Z': 'Ꮓ',
                'a': 'Ꭿ',
                'b': 'Ᏸ',
                'c': 'Ꮸ',
                'd': 'Ꭰ',
                'e': 'Ꭼ',
                'f': 'Ꮀ',
                'g': 'Ꮆ',
                'h': 'Ꮋ',
                'i': 'Ꭸ',
                'j': 'Ꮰ',
                'k': 'Ꮶ',
                'l': 'Ꮭ',
                'm': 'Ꮇ',
                'n': 'Ꮑ',
                'o': 'Ꮎ',
                'p': 'Ꮲ',
                'q': 'Ꮕ',
                'r': 'Ꮢ',
                's': 'Ꮥ',
                't': 'Ꮦ',
                'u': 'Ꮼ',
                'v': 'Ꮙ',
                'w': 'Ꮿ',
                'x': 'Ꮂ',
                'y': 'Ꮍ',
                'z': 'Ꮓ'
            };
            return RectanglesidefadeChars[char] || char;
        }

        function getCutenotesChar(char) {
            const cutenotesChars = {
                'A': '🅐',
                'B': '🅑',
                'C': '🅒',
                'D': '🅓',
                'E': '🅔',
                'F': '∱',
                'G': '🅖',
                'H': '🅗',
                'I': '🅘',
                'J': '🅙',
                'K': '🅚',
                'L': '🅛',
                'M': '🅜',
                'N': '🅝',
                'O': '🅞',
                'P': '🅟',
                'Q': '🅠',
                'R': '🅡',
                'S': 'ֆ',
                'T': '🅣',
                'U': '🅤',
                'V': '🅥',
                'W': '🅦',
                'X': '🅧',
                'Y': '🅨',
                'Z': '🅩',
                'a': '🅐',
                'b': '🅑',
                'c': '🅒',
                'd': '🅓',
                'e': '🅔',
                'f': '∱',
                'g': '🅖',
                'h': '🅗',
                'i': '🅘',
                'j': '🅙',
                'k': '🅚',
                'l': '🅛',
                'm': '🅜',
                'n': '🅝',
                'o': '🅞',
                'p': '🅟',
                'q': '🅠',
                'r': '🅡',
                's': 'ֆ',
                't': '🅣',
                'u': '🅤',
                'v': '🅥',
                'w': '🅦',
                'x': '🅧',
                'y': '🅨',
                'z': '🅩'
            };
            return cutenotesChars[char] || char;
        }

        function getQuotationChar(char) {
            const QuotationChars = {
                'A': 'ꋫ',
                'B': 'ꍗ',
                'C': 'ꏳ',
                'D': 'ꂟ',
                'E': 'ꏂ',
                'F': 'ꄟ',
                'G': 'ꍌ',
                'H': 'ꃬ',
                'I': '꒐',
                'J': '꒻',
                'K': 'ꀘ',
                'L': '꒒',
                'M': 'ꂵ',
                'N': 'ꂚ',
                'O': 'ꉻ',
                'P': 'ꉣ',
                'Q': 'ꋠ',
                'R': 'ꋪ',
                'S': 'ꑄ',
                'T': '꓄',
                'U': 'ꀎ',
                'V': '꒦',
                'W': 'ꅐ',
                'X': 'ꉼ',
                'Y': 'ꐞ',
                'Z': '꒗',
                'a': 'ꋫ',
                'b': 'ꍗ',
                'c': 'ꏳ',
                'd': 'ꂟ',
                'e': 'ꏂ',
                'f': 'ꄟ',
                'g': 'ꍌ',
                'h': 'ꃬ',
                'i': '꒐',
                'j': '꒻',
                'k': 'ꀘ',
                'l': '꒒',
                'm': 'ꂵ',
                'n': 'ꂚ',
                'o': 'ꉻ',
                'p': 'ꉣ',
                'q': 'ꋠ',
                'r': 'ꋪ',
                's': 'ꑄ',
                't': '꓄',
                'u': 'ꀎ',
                'v': '꒦',
                'w': 'ꅐ',
                'x': 'ꉼ',
                'y': 'ꐞ',
                'z': '꒗'
            };
            return QuotationChars[char] || char;
        }

        function getSuperFrogChar(char) {
            const SuperFrogChars = {
                'a': 'ꍏ',
                'b': 'ꌃ',
                'c': 'ꉓ',
                'd': 'ꀸ',
                'e': 'ꍟ',
                'f': 'ꎇ',
                'g': 'ꁅ',
                'h': 'ꃅ',
                'i': 'ꀤ',
                'j': 'ꀭ',
                'k': 'ꀘ',
                'l': '꒒',
                'm': 'ꂵ',
                'n': 'ꈤ',
                'o': 'ꂦ',
                'p': 'ꉣ',
                'q': 'ꆰ',
                'r': 'ꋪ',
                's': 'ꌗ',
                't': '꓄',
                'u': 'ꀎ',
                'v': 'ꃴ',
                'w': 'ꅏ',
                'x': 'ꊼ',
                'y': 'ꌩ',
                'z': 'ꁴ',
                'A': 'ꍏ',
                'B': 'ꌃ',
                'C': 'ꉓ',
                'D': 'ꀸ',
                'E': 'ꍟ',
                'F': 'ꎇ',
                'G': 'ꁅ',
                'H': 'ꃅ',
                'I': 'ꀤ',
                'J': 'ꀭ',
                'K': 'ꀘ',
                'L': '꒒',
                'M': 'ꂵ',
                'N': 'ꈤ',
                'O': 'ꂦ',
                'P': 'ꉣ',
                'Q': 'ꆰ',
                'R': 'ꋪ',
                'S': 'ꌗ',
                'T': '꓄',
                'U': 'ꀎ',
                'V': 'ꃴ',
                'W': 'ꅏ',
                'X': 'ꊼ',
                'Y': 'ꌩ',
                'Z': 'ꁴ'
            };
            return SuperFrogChars[char] || char;
        }

        function getLovedropsChar(char) {
            const LovedropsChars = {
                'A': '₳',
                'B': '฿',
                'C': 'Ȼ',
                'D': 'Ɖ',
                'E': 'Ɇ',
                'F': 'Ŧ',
                'G': 'Ǥ',
                'H': 'Ħ',
                'I': 'ı',
                'J': 'J',
                'K': '₭',
                'L': 'Ⱡ',
                'M': '₥',
                'N': '₦',
                'O': 'Ø',
                'P': '₱',
                'Q': 'Q',
                'R': 'Ɽ',
                'S': '₴',
                'T': '₮',
                'U': 'Ʉ',
                'V': 'V',
                'W': '₩',
                'X': 'Ӿ',
                'Y': 'Ɏ',
                'Z': 'Ƶ',
                'a': '₳',
                'b': '฿',
                'c': 'Ȼ',
                'd': 'Ɖ',
                'e': 'Ɇ',
                'f': 'Ŧ',
                'g': 'Ǥ',
                'h': 'Ħ',
                'i': 'ı',
                'j': 'J',
                'k': '₭',
                'l': 'Ⱡ',
                'm': '₥',
                'n': '₦',
                'o': 'Ø',
                'p': '₱',
                'q': 'Q',
                'r': 'Ɽ',
                's': '₴',
                't': '₮',
                'u': 'Ʉ',
                'v': 'V',
                'w': '₩',
                'x': 'Ӿ',
                'y': 'Ɏ',
                'z': 'Ƶ'
            };
            return LovedropsChars[char] || char;
        }

        function getButterflyChar(char) {
            const ButterflyChars = {
                'A': 'ᗩ',
                'B': 'ᗷ',
                'C': 'ᑕ',
                'D': 'ᗪ',
                'E': 'ᗴ',
                'F': 'ᖴ',
                'G': 'Ǥ',
                'H': 'ᕼ',
                'I': 'Ꭵ',
                'J': 'ᒎ',
                'K': 'ᛕ',
                'L': 'ᒪ',
                'M': 'ᗰ',
                'N': 'ᑎ',
                'O': 'ᗝ',
                'P': 'ᑭ',
                'Q': 'Ɋ',
                'R': 'ᖇ',
                'S': 'ᔕ',
                'T': '丅',
                'U': 'ᑌ',
                'V': 'ᐯ',
                'W': 'ᗯ',
                'X': '᙭',
                'Y': 'Ƴ',
                'Z': '乙',
                'a': 'ᗩ',
                'b': 'ᗷ',
                'c': 'ᑕ',
                'd': 'ᗪ',
                'e': 'ᗴ',
                'f': 'ᖴ',
                'g': 'Ǥ',
                'h': 'ᕼ',
                'i': 'Ꭵ',
                'j': 'ᒎ',
                'k': 'ᛕ',
                'l': 'ᒪ',
                'm': 'ᗰ',
                'n': 'ᑎ',
                'o': 'ᗝ',
                'p': 'ᑭ',
                'q': 'Ɋ',
                'r': 'ᖇ',
                's': 'ᔕ',
                't': '丅',
                'u': 'ᑌ',
                'v': 'ᐯ',
                'w': 'ᗯ',
                'x': '᙭',
                'y': 'Ƴ',
                'z': '乙'

            };
            return ButterflyChars[char] || char;
        }

        function getCutiePieChar(char) {
            const CutiePieChars = {
                'A': 'α',
                'B': 'Ⴆ',
                'C': 'ƈ',
                'D': 'ԃ',
                'E': 'ҽ',
                'F': 'ϝ',
                'G': 'ɠ',
                'H': 'ԋ',
                'I': 'ι',
                'J': 'ʝ',
                'K': 'ƙ',
                'L': 'ʅ',
                'M': 'ɱ',
                'N': 'ɳ',
                'O': 'σ',
                'P': 'ρ',
                'Q': 'ϙ',
                'R': 'ɾ',
                'S': 'ʂ',
                'T': 'ƚ',
                'U': 'υ',
                'V': 'ʋ',
                'W': 'ɯ',
                'X': 'x',
                'Y': 'ყ',
                'Z': 'ȥ',
                'a': 'α',
                'b': 'Ⴆ',
                'c': 'ƈ',
                'd': 'ԃ',
                'e': 'ҽ',
                'f': 'ϝ',
                'g': 'ɠ',
                'h': 'ԋ',
                'i': 'ι',
                'j': 'ʝ',
                'k': 'ƙ',
                'l': 'ʅ',
                'm': 'ɱ',
                'n': 'ɳ',
                'o': 'σ',
                'p': 'ρ',
                'q': 'ϙ',
                'r': 'ɾ',
                's': 'ʂ',
                't': 'ƚ',
                'u': 'υ',
                'v': 'ʋ',
                'w': 'ɯ',
                'x': 'x',
                'y': 'ყ',
                'z': 'ȥ'
            };
            return CutiePieChars[char] || char;
        }

        function getunblockedChar(char) {
            const unblockedChars = {
                'A': 'Ꭿ',
                'B': 'в',
                'C': 'Ȼ',
                'D': '𝐝',
                'E': 'ⓔ',
                'F': '∱',
                'G': 'Ɠ',
                'H': 'ⓗ',
                'I': '𝒊',
                'J': 'ʝ',
                'K': 'ꀘ',
                'L': 'ʅ',
                'M': 'ₘ',
                'N': '𝑛',
                'O': 'ὄ',
                'P': 'ꉣ',
                'Q': '🅠',
                'R': 'ʀ',
                'S': '𝘀',
                'T': '𝙩',
                'U': 'ꮼ',
                'V': '𝐯',
                'W': 'w',
                'X': 'ꉧ',
                'Y': '𝘺',
                'Z': 'ɀ',
                'a': 'α',
                'b': '𝗕',
                'c': 'ꉔ',
                'd': 'Ɗ',
                'e': '𝔼',
                'f': '𝐹',
                'g': '𝙂',
                'h': 'Ӈ',
                'i': '𝑰',
                'j': 'ጋ',
                'k': '𝐊',
                'l': '𝘓',
                'm': '𝕄',
                'n': '刀',
                'o': '🅞',
                'p': 'ｱ',
                'q': 'q',
                'r': '𝖱',
                's': '🅢',
                't': 'ŧ',
                'u': 'υ',
                'v': '√',
                'w': 'ฬ',
                'x': 'א',
                'y': '🆈',
                'z': '𝑍'


            };
            return unblockedChars[char] || char;
        }
        document.querySelectorAll('.copy-button, .favorite-button').forEach(button => {
            button.addEventListener('click', function () {
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove(
                    'clicked'); // Remove the class after the animation ends
                }, 500); // Match the duration of the animation (0.5s)
            });
        });
    


    function showTab(tabId, el) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.add('d-none');
        });
        document.getElementById(tabId).classList.remove('d-none');

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        el.classList.add('active');
    }

   

    // Set the first tab active by default
    document.addEventListener("DOMContentLoaded", function() {
        showTab('fonts', document.querySelector('.tab-btn.active'));
    });


    document.addEventListener("DOMContentLoaded", function () {
        let currentUrl = window.location.href;
        let currentPage = currentUrl.split('/').pop(); // Get last part of URL
        let dropdownButton = document.getElementById("languageDropdown");

        // Determine current language
        let currentLang;
        if (currentPage === "" || currentPage === "") {
            currentLang = "en"; // Default to English
        } else {
            currentLang = currentPage.split('.')[0]; // Extract "es" or "ar"
        }

        // Find the matching link and set the dropdown button text
        let links = document.querySelectorAll(".dropdown-item");
        links.forEach(link => {
            if (link.getAttribute("data-lang") === currentLang) {
                dropdownButton.innerHTML = link.innerHTML; // Set the button text to current language name
            }
        });
    });
    function toggleShareBox() {
        const shareBox = document.getElementById('shareBox');
        shareBox.classList.toggle('d-none');
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);

        document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${encodedUrl}`;

        document.getElementById('urlPreview').textContent = currentUrl;
    }

    function openShareWindow(url) {
        window.open(url, 'shareWindow', 'width=600,height=400');
        return false;
    }

    function copyLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            const popup = document.getElementById('copyPopup');
            popup.classList.remove('d-none');
            document.getElementById('copyUrl').textContent = url;
            setTimeout(() => popup.classList.add('d-none'), 3000);
        });
    }
