document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cities').value;
    const weatherDetails = document.getElementById('weatherDetails');
    
    if (city) {
        // Clear previous details
        weatherDetails.innerHTML = '';

        // Depending on the selected city, load different content
        switch(city) {
            case 'bucharest':
                weatherDetails.innerHTML = `
                    <h2>Bucharest</h2>
                    <img src="images/bucharest-weather.jpg" alt="Bucharest Weather">
                    <p>It is the centre of Romanian media, culture and art. Bucharest is the 6th largest city in the European Union by population within city limits. Romanian law stipulates that Bucharest has a special administrative status which is equal to that of a County; Bucharest metropolitan area is a proposed project.</p>
                    <p>එය රුමේනියානු මාධ්‍ය, සංස්කෘතිය සහ කලාවේ මධ්‍යස්ථානයයි. බුකාරෙස්ට් යනු නගර සීමාව තුළ ජනගහනය අනුව යුරෝපීය සංගමයේ 6 වන විශාලතම නගරයයි. රුමේනියානු නීතිය අනුව බුකාරෙස්ට්හි විශේෂ පරිපාලන තත්වයක් ඇති අතර එය ප්‍රාන්තයකට සමාන වේ; Bucharest metropolitan area යනු යෝජිත ව්‍යාපෘතියකි.</p>
                    
                `;
                break;
            case 'cluj-napoca':
                weatherDetails.innerHTML = `
                    <h2>Cluj-Napoca</h2>
                    <img src="images/Cluj-Napoca-weather.jpg" alt="Cluj-Napoca Weather">
                    <p>Cluj-Napoca, city, capital of Cluj județ (county), northwestern Romania. The historic capital of Transylvania, it is approximately 200 mi (320 km) northwest of Bucharest in the Someșul Mic River valley. The city stands on the site of an ancient Dacian settlement, Napoca, which the Romans made a municipium.</p>
                    <p>Cluj-Napoca, නගරය, Cluj județ (county), වයඹ දිග රුමේනියාවේ අගනුවර. ට්‍රාන්සිල්වේනියාවේ ඓතිහාසික අගනුවර, එය ආසන්න වශයෙන් 200 සැතපුම් (320 km) බුකාරෙස්ට් සිට වයඹ දෙසින් සෝමසුල් මයික් ගංගා නිම්නයේ පිහිටා ඇත. නගරය පිහිටා ඇත්තේ රෝමවරුන් විසින් නගර සභාවක් බවට පත් කරන ලද පැරණි ඩේසියන් ජනාවාසයක් වූ නැපෝකා භූමියේ ය.</p>

                `;
                break;
            case 'timisoara':
                weatherDetails.innerHTML = `
                    <h2>Timișoara</h2>
                    <img src="images/timisoara-weather.jpg" alt="Timișoara Weather">
                    <p>Timișoara is a large city in western Romania, not far from the borders with Serbia and Hungary. It was a settlement center of the German-speaking Danube Swabians until World War II. Timișoara has just under 320,000 inhabitants.</p>
                    <p>ටිමිසෝරා යනු බටහිර රුමේනියාවේ සර්බියාව සහ හංගේරියාවේ මායිම්වලට නුදුරින් පිහිටි විශාල නගරයකි. එය දෙවන ලෝක යුද්ධය දක්වා ජර්මානු භාෂාව කතා කරන ඩැනියුබ් ස්වබියන්වරුන්ගේ ජනාවාස මධ්‍යස්ථානයක් විය. ටිමිෂෝරා හි ජනගහනය 320,000 ට අඩු ය.</p>

                `;
                break;
            case 'Iasi':
                weatherDetails.innerHTML = `
                    <h2>Iasi</h2>
                    <img src="images/iasi-weather.jpg" alt="Iași Weather">
                    <p>The large city of Iasi has been a cultural and political hub since the 15th century. Everything orbits the Golden Plateau, bookended by the Palace of Culture and Union Square, and packed to the brim with churches and palaces galore. Iasi has significant Jewish history.</p>
                    <p>Iasi විශාල නගරය 15 වන සියවසේ සිට සංස්කෘතික හා දේශපාලන කේන්ද්‍රස්ථානයක් විය. සෑම දෙයක්ම රන් සානුව වටා කක්ෂගත වන අතර, සංස්කෘතික මාලිගය සහ යුනියන් චතුරශ්‍රය විසින් වෙන් කර ඇති අතර, පල්ලි සහ මාලිගා විශාල ප්‍රමාණයකින් පිරී ඇත. Iasi සැලකිය යුතු යුදෙව් ඉතිහාසයක් ඇත.</p>

                `;
                break;
                case 'constanta':
                weatherDetails.innerHTML = `
                    <h2>Constanţa</h2>
                    <img src="images/Constanţa-weather.jpg" alt="Iași Weather">
                    <p>Constanta is situated in the south-east of Romania, on the western coast of the Black Sea. At the crossroads of several commercial routes, Constanta is the administrative centre of Constanta County and the largest city in the region. The city has 315,000 inhabitants and the county 763,000.</p>
                    <p>කොන්ස්ටන්ටා පිහිටා ඇත්තේ රුමේනියාවේ ගිනිකොන දෙසින්, කළු මුහුදේ බටහිර වෙරළ තීරයේ ය. වාණිජ මාර්ග කිහිපයක සන්ධිස්ථානයක, කොන්ස්ටන්ටා යනු කොන්ස්ටන්ටා ප්‍රාන්තයේ පරිපාලන මධ්‍යස්ථානය වන අතර කලාපයේ විශාලතම නගරය වේ. නගරයේ 315,000 ක් සහ ප්‍රාන්තයේ 763,000 ක් ඇත.</p>

                `;
                break;
                case 'craiova':
                weatherDetails.innerHTML = `
                    <h2>Craiova</h2>
                    <img src="images/Craiova-weather.jpg" alt="Iași Weather">
                    <p>Craiova, the capital of the Oltenia region, is a commercial and cultural centre located 200 km from Bucharest. Its foundation dates back to 400 - 350 BC and developed into an important market town that later on also took on administrative responsibilities.</p>
                    <p>ඔල්ටේනියා කලාපයේ අගනුවර වන Craiova යනු බුකාරෙස්ට් සිට කිලෝමීටර් 200 ක් දුරින් පිහිටි වාණිජ හා සංස්කෘතික මධ්‍යස්ථානයකි. එහි පදනම ක්‍රි.පූ 400 - 350 දක්වා දිවෙන අතර පසුව පරිපාලන වගකීම් ද භාරගත් වැදගත් වෙළඳපොළ නගරයක් බවට වර්ධනය විය.</p>

                `;
                break;
                case 'brasov':
                weatherDetails.innerHTML = `
                    <h2>Brasov</h2>
                    <img src="images/brasov-weather.jpg" alt="Iași Weather">
                    <p>Brașov, city, capital of Brașov județ (county), central Romania. One of the largest cities of the country, it is on the northern slope of the Transylvanian Alps (Southern Carpathians), surrounded on three sides by mountains, 105 miles (170 km) north-northwest of Bucharest by road. Black Church, Braşov, Romania.</p>
                    <p>බ්‍රාසොව්, නගරය, බ්‍රාසොව් ජූඩේ (ප්‍රාන්තයේ), මධ්‍යම රුමේනියාවේ අගනුවර. රටේ විශාලතම නගරවලින් එකක් වන එය ට්‍රාන්සිල්වේනියානු ඇල්ප්ස් කඳුකරයේ (දකුණු කාර්පාතියන්ස්) උතුරු බෑවුමේ පිහිටා ඇත, එය තුන් පැත්තකින් කඳු වලින් වටවී ඇත, බුකාරෙස්ට් සිට උතුරු-වයඹ දෙසින් මාර්ගයෙන් 105 කි.මී. කළු පල්ලිය, Braşov, රුමේනියාව.</p>

                `;
                break;
                case 'galati':
                weatherDetails.innerHTML = `
                    <h2>Galaţi</h2>
                    <img src="images/galati-weather.jpg" alt="Iași Weather">
                    <p>Archeological evidence points to occupation of the region in the neolithic period. For example, north west of the town of Galați, on the eastern shores of the Malina marshes, fragments of ceramic-type Stoicani Aldeni, stilex and tools made of bone have been found. A stone sceptre, from the late Bronze Age, belonging to the Coslogeni culture was found on the marshes' southern bank. Galați town itself developed from an ancient Dacian settlement of the sixth and fifth centuries BCE where there was a ford across the Danube river. In 101 to 102 and 105 to 106, the Dacians fought wars against the Romans and the area became part of the Roman empire. A strong Roman fortress was built at Barboși to defend the ford across Danube. From the 300s a Daco-Roman settlement developed at a ford south of the site of the Church of the Virgin.</p>
                    <p>පුරාවිද්‍යාත්මක සාක්ෂි මගින් නව ශිලා යුගයේ කලාපය අත්පත් කර ගෙන ඇත. නිදසුනක් වශයෙන්, ගැලැසි නගරයේ වයඹ දෙසින්, මලිනා වගුරු බිම්වල නැගෙනහිර වෙරළ තීරයේ, සෙරමික් වර්ගයේ ස්ටොයිකානි ඇල්ඩේනි කොටස්, ස්ටයිලෙක්ස් සහ අස්ථි වලින් සාදන ලද මෙවලම් සොයාගෙන ඇත. කොස්ලොගේනි සංස්කෘතියට අයත් ලෝකඩ යුගයේ අග භාගයේ ගල් යෂ්ටියක් වගුරු බිම්වල දකුණු ඉවුරේ තිබී හමු විය. ඩැනියුබ් ගඟ හරහා බලකොටුවක් තිබූ ක්‍රිස්තු පූර්ව හයවන සහ පස්වන සියවස්වල පුරාණ ඩේසියන් ජනාවාසයකින් ගලාසි නගරයම දියුණු විය. 101 සිට 102 දක්වා සහ 105 සිට 106 දක්වා, ඩේසියන්වරු රෝමවරුන්ට එරෙහිව යුද්ධ කළ අතර එම ප්‍රදේශය රෝම අධිරාජ්‍යයේ කොටසක් බවට පත්විය. ඩැනියුබ් හරහා බලකොටුව ආරක්ෂා කිරීම සඳහා ශක්තිමත් රෝම බලකොටුවක් බාර්බෝසි හි ඉදිකරන ලදී. 300 ගණන්වල සිට කන්‍යා දේවස්ථානයට දකුණින් පිහිටි බලකොටුවක ඩැකෝ-රෝමන් ජනාවාසයක් වර්ධනය විය.</p>

                `;
                break;
                case 'ploiesti':
                weatherDetails.innerHTML = `
                    <h2>Ploiesti</h2>
                    <img src="images/Ploiesti-weather.jpg" alt="Iași Weather">
                    <p>The city of Ploiesti is located in southern Romania, 60 km north of Bucharest. The city flourished in the 17th and 18th centuries as a centre for trade and crafts, and between the two world wars the local economy was boosted by the advent of the petroleum processing industry.</p>
                    <p>Ploiesti නගරය දකුණු රුමේනියාවේ බුකාරෙස්ට් සිට කිලෝමීටර 60 ක් උතුරින් පිහිටා ඇත. 17 වන සහ 18 වන ශතවර්ෂ වලදී වෙළඳ හා අත්කම් සඳහා මධ්‍යස්ථානයක් ලෙස නගරය සමෘද්ධිමත් වූ අතර ලෝක යුද්ධ දෙක අතර පෙට්‍රෝලියම් සැකසුම් කර්මාන්තයේ පැමිණීමත් සමඟ දේශීය ආර්ථිකය ඉහළ නැංවීය.</p>

                `;
                break;
                case 'oradea':
                weatherDetails.innerHTML = `
                    <h2>Oradea</h2>
                    <img src="images/oradea-weather.jpg" alt="Iași Weather">
                    <p>Oradea, city, capital of Bihor judeƫ (county), northwestern Romania. It lies about 8 miles (13 km) east of the Hungarian border, along the Crişul Repede River where it leaves the western foothills of the Western Carpathians and flows onto the Hungarian Plain.</p>
                    <p>Oradea, නගරය, Bihor judeƫ (ප්රාන්තය), වයඹ දිග රුමේනියාවේ අගනුවර. එය හංගේරියානු දේශසීමාවේ සිට නැගෙනහිරින් සැතපුම් 8 ක් (කිලෝමීටර් 13) පමණ දුරින්, ක්‍රිසුල් රෙපෙඩේ ගඟ දිගේ බටහිර කාර්පාතියන්වරුන්ගේ බටහිර කඳුකරයෙන් පිටත් වී හංගේරියානු තැනිතලාවට ගලා යයි.</p>

                `;
                break;
                case 'braila':
                weatherDetails.innerHTML = `
                    <h2>Braila</h2>
                    <img src="images/braila-weather.jpg" alt="Iași Weather">
                    <p>Brăila (/brəˈiːlə/, also US: /-lɑː/, Romanian: [brəˈila]) is a city in Muntenia, eastern Romania, a port on the Danube and the capital of Brăila County. The Sud-Est Regional Development Agency is located in Brăila.</p>
                    <p>Brăila (/brəˈiːlə/, US: /-lɑː/, Romanian: [brəˈila]) යනු නැගෙනහිර රුමේනියාවේ මුන්ටේනියාවේ පිහිටි නගරයකි, ඩැනියුබ් හි වරායක් සහ බ්‍රිලා ප්‍රාන්තයේ අගනුවර වේ. Sud-Est ප්‍රාදේශීය සංවර්ධන නියෝජිතායතනය Brăila හි පිහිටා ඇත.</p>

                `;
                break;
                case 'arad':
                weatherDetails.innerHTML = `
                    <h2>Arad</h2>
                    <img src="images/arad-weather.jpg" alt="Iași Weather">
                    <p>The city of Arad in western Romania has a population of 172,000. It is an important industrial centre and transport hub and is home to two universities. Since Romania's transition to a market economy, Arad has enjoyed industrial and commercial prosperity,</p>
                    <p>බටහිර රුමේනියාවේ Arad නගරයේ ජනගහනය 172,000 කි. එය වැදගත් කාර්මික මධ්‍යස්ථානයක් සහ ප්‍රවාහන මධ්‍යස්ථානයක් වන අතර එය විශ්ව විද්‍යාල දෙකකට නිවහන වේ. රුමේනියාව වෙළඳපල ආර්ථිකයකට සංක්‍රමණය වීමෙන් පසු, Arad කාර්මික සහ වාණිජ සමෘද්ධිය භුක්ති වින්දා.</p>

                `;
                break;
                case 'pitesti':
                weatherDetails.innerHTML = `
                    <h2>Pitesti</h2>
                    <img src="images/pitesti-weather.jpg" alt="Iași Weather">
                    <p>Pitești (Romanian pronunciation: [piˈteʃtʲ]) is a city in Romania, located on the river Argeș. The capital and largest city of Argeș County, it is an important commercial and industrial center, as well as the home of two universities. Pitești is situated in the historical region of Muntenia.</p>
                    <p>Piteřti (රුමේනියානු උච්චාරණය: [piˈteʃtʲ]) යනු රුමේනියාවේ ආර්ජෙස් නදියේ පිහිටි නගරයකි. අගනුවර සහ විශාලතම නගරය වන Argeș County, එය වැදගත් වාණිජ හා කාර්මික මධ්‍යස්ථානයක් මෙන්ම විශ්ව විද්‍යාල දෙකක නිවහනකි. පිටෙස්ටි පිහිටා ඇත්තේ මුන්ටේනියාවේ ඓතිහාසික ප්‍රදේශයේ ය.</p>
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>2-Column Table</title>
                        <style>
                            table {
                                border-collapse: collapse;
                                width: 100%;
                            }

                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                                text-align: left;
                            }

                            tr:nth-child(even) {
                                background-color: #f2f2f2;
                            }
                        </style>
                    </head>
                    <body>
                        <table>
                            <tr>
                                <th>Column 1</th>
                                <th>Column 2</th>
                            </tr>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                            </tr>
                            <tr>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                        </table>
                    </body>
                    </html> <br>
                `;
                break;
                case 'sibiu':
                weatherDetails.innerHTML = `
                    <h2>Sibiu</h2>
                    <img src="images/sibiu-weather.jpg" alt="Iași Weather">
                    <p>Sibiu, city, central Romania. It lies along the Cibin River at an elevation of 1,350–1,400 feet (410–425 metres) above sea level. Sibiu is situated on the north side of the Turnu Roșu (“Red Tower”) Pass, which links Transylvania to southern Romania across the Transylvanian Alps (Southern Carpathians).</p>
                    <p>Sibiu, නගරය, මධ්යම රුමේනියාව. එය මුහුදු මට්ටමේ සිට අඩි 1,350-1,400 (මීටර් 410-425) ක උන්නතාංශයක සිබින් ගඟ දිගේ පිහිටා ඇත. සිබියු පිහිටා ඇත්තේ ට්‍රාන්සිල්වේනියා ඇල්ප්ස් (දකුණු කාර්පාතියන්) හරහා ට්‍රාන්සිල්වේනියාව දකුණු රුමේනියාවට සම්බන්ධ කරන ටර්නු රොසු (“රතු කුළුණ”) මංසන්ධියේ උතුරු පැත්තේ ය.</p>

                `;
                break;
                case 'bacau':
                weatherDetails.innerHTML = `
                    <h2>Bacau</h2>
                    <img src="images/bacau-weather.jpg" alt="Iași Weather">
                    <p>Bacău, city, capital of Bacău județ (county), eastern Romania, near the confluence of the Bistrița and Siret rivers, 150 miles (240 km) northeast of Bucharest. Bacău was an early customs post, where trade routes came together at a ford over the Bistrița. It was first mentioned in documents in 1408.</p>
                    <p>Bacău, නගරය, Bacău județ (county), නැගෙනහිර රුමේනියාවේ අගනුවර, Bucharest සිට ඊසාන දෙසින් 150 සැතපුම් (240 km) බිස්ට්‍රිටා සහ Siret ගංගා එකතුව අසල. Bacău යනු මුල්කාලීන රේගු මුරපොලක් වූ අතර එහිදී බිස්ට්‍රිටා හරහා ඇති බලකොටුවක වෙළඳ මාර්ග එකට එකතු විය. එය පළමු වරට 1408 දී ලේඛනවල සඳහන් විය.</p>

                `;
                break;
                case 'targu-mures':
                weatherDetails.innerHTML = `
                    <h2>Targu-mures</h2>
                    <img src="images/targu-mures-weather.jpg" alt="Iași Weather">
                    <p>Târgu Mureş, city, capital of Mureş judeƫ (county), north-central Romania. It lies in the valley of the Mureş River, in the southeastern part of the Transylvanian Basin. First mentioned in the early 14th century, it was a cattle and crop market town called Agropolis by Greek traders.</p>
                    <p>Târgu Mureş, නගරය, Mureş judeƫ (county), උතුරු-මැද රුමේනියාවේ අගනුවර. එය පිහිටා ඇත්තේ ට්‍රාන්සිල්වේනියානු ද්‍රෝණියේ ගිනිකොන දෙසින් මුරේස් ගඟේ නිම්නයේ ය. 14 වන ශතවර්ෂයේ මුල් භාගයේදී එය මුලින්ම සඳහන් කළේ ග්‍රීක වෙළඳුන් විසින් ඇග්‍රොපොලිස් ලෙස හඳුන්වන ගව හා බෝග වෙළඳපොළ නගරයකි.</p>

                `;
                break;
                case 'baia-mare':
                weatherDetails.innerHTML = `
                    <h2>Baia Mare</h2>
                    <img src="images/baia-mare-weather.jpg" alt="Iași Weather">
                    <p>Baia Mare, city, capital of Maramureș județ (county), northwestern Romania. It is situated in the Săsar River valley, surrounded by mountains. This location affords the city protection from the cold northeastern winds and sustains a quasi-Mediterranean vegetation.</p>
                    <p>Baia Mare, නගරය, Maramureș județ (county), වයඹ රුමේනියාවේ අගනුවර. එය කඳු වලින් වට වූ සසාර් ගංගා නිම්නයේ පිහිටා ඇත. මෙම ස්ථානය සීතල ඊසානදිග සුළඟින් නගර ආරක්ෂාව සපයන අතර අර්ධ මධ්‍යධරණී වෘක්ෂලතාදිය පවත්වා ගනී.</p>

                `;
                break;
                case 'buzau':
                weatherDetails.innerHTML = `
                    <h2>Buzau</h2>
                    <img src="images/buzau-weather.jpg" alt="Iași Weather">
                    <p>Buzău, city, capital of Buzău județ (county), southeastern Romania, on the Buzău River, approximately 60 miles (100 km) northeast of Bucharest. Its location near the foothills of the Eastern Carpathians at the limit of the Danube Plain fostered its development as a market and trading centre.</p>
                    <p>Buzău, නගරය, Buzău județ (county), අග්නිදිග රුමේනියාවේ අගනුවර, Buzău ගඟේ, Bucharest සිට ආසන්න වශයෙන් 60 සැතපුම් (100 km) ඊසාන දෙසින්. ඩැනියුබ් තැනිතලාවේ සීමාවේ නැගෙනහිර කාර්පාතියන් කඳු පාමුල එහි පිහිටීම වෙළඳපල සහ වෙළඳ මධ්‍යස්ථානයක් ලෙස එහි වර්ධනයට හේතු විය.</p>

                `;
                break;
                case 'satu-mare':
                weatherDetails.innerHTML = `
                    <h2>Satu-mare</h2>
                    <img src="images/satu-mare-weather.jpg" alt="Iași Weather">
                    <p>Satu Mare, city, northwestern Romania. It lies on the northeastern fringe of the Great Hungarian Plain, on the right bank of the Someș River, 8 miles (13 km) east of the Hungarian border and 17 miles (27 km) south of the Ukrainian border.</p>
                    <p>Satu Mare, නගරය, වයඹ රුමේනියාව. එය පිහිටා ඇත්තේ මහා හංගේරියානු තැනිතලාවේ ඊසානදිග මායිමේ, සෝමේස් ගංගාවේ දකුණු ඉවුරේ, හංගේරියානු දේශසීමාවෙන් නැගෙනහිරින් සැතපුම් 8 ක් (කිලෝමීටර් 13) සහ යුක්රේන දේශසීමාවෙන් දකුණට 17 සැතපුම් (කිලෝමීටර් 27) කි.</p>

                `;
                break;
                case 'botosani':
                weatherDetails.innerHTML = `
                    <h2>Botosani</h2>
                    <img src="images/botosani-weather.jpg" alt="Iași Weather">
                    <p>Botoșani “The City of Princesses” Botosani, located in north east Romania, is a living cultural heritage. The city is the birthplace of many celebrated Romanians such as Mihai Eminescu, a Romanian poet, and Nicolae Iorga, one of Romania's most important historians.</p>
                    <p>ඊසානදිග රුමේනියාවේ පිහිටි Botořani "The City of Princesses" Botosani යනු සජීවී සංස්කෘතික උරුමයකි. රුමේනියානු කවියෙකු වන මිහායි එමිනෙස්කු සහ රුමේනියාවේ වැදගත්ම ඉතිහාසඥයෙකු වන නිකොලේ ඉර්ගා වැනි බොහෝ කීර්තිමත් රුමේනියානුවන්ගේ උපන් ස්ථානය මෙම නගරයයි.</p>

                `;
                break;
                case 'piatra-neamt':
                weatherDetails.innerHTML = `
                    <h2>Piatra Neamt</h2>
                    <img src="images/piatra-neamt.jpg" alt="Iași Weather">
                    <p>Piatra-Neamƫ, city, capital of Neamƫ judeƫ (county), northeastern Romania. It lies in the valley of the Bistriƫa River and is surrounded by mountains. It is first documented in the 14th century as Piatra lui Crăciun, or Camena, a market town where fairs were held. Stephen the Great of Moldavia built the Church of St.</p>
                    <p>Piatra-Neamƫ, නගරය, Neamƫ judeƫ (county), ඊසානදිග රුමේනියාවේ අගනුවර. එය පිහිටා ඇත්තේ බිස්ට්‍රියා ගංගා නිම්නයේ වන අතර එය කඳු වලින් වටවී ඇත. එය ප්‍රථම වරට ලේඛනගත කර ඇත්තේ 14 වන සියවසේදී Piatra lui Crăciun නොහොත් Camena ලෙස පොළවල් පැවති වෙළඳ පොළ නගරයක් වශයෙනි. මෝල්ඩේවියාවේ මහා ස්ටීවන් ශාන්ත දේවස්ථානය ඉදි කළේය.</p>
                `;
                break;
                case 'ramnicu-valcea':
                weatherDetails.innerHTML = `
                    <h2>Ramnicu-Valcea</h2>
                    <img src="images/ramnicu-valcea-weather.jpg" alt="Iași Weather">
                    <p>The municipality of Ramnicu Valcea (“Ramnic”), the capital Town of Valcea County, is located in the central area of the county, 195 km far from Bucharest, the capital of Romania. The population of the municipality, according with the 2011 census, amounts to 92,000 inhabitants.</p>
                    <p>Valcea ප්‍රාන්තයේ අගනුවර වන Ramnicu Valcea ("Ramnic") මහ නගර සභාව, රුමේනියාවේ අගනුවර වන Bucharest සිට 195 km දුරින් ප්‍රාන්තයේ මධ්‍යම ප්‍රදේශයේ පිහිටා ඇත. 2011 සංගණනයට අනුව මහ නගර සභාවේ ජනගහනය 92,000 වැසියන් වේ.</p>
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>2-Column Table</title>
                        <style>
                            table {
                                border-collapse: collapse;
                                width: 100%;
                            }

                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                                text-align: left;
                            }

                            tr:nth-child(even) {
                                background-color: #f2f2f2;
                            }
                        </style>
                    </head>
                    <body>
                        <table>
                            <tr>
                                <th>Column 1</th>
                                <th>Column 2</th>
                            </tr>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                            </tr>
                            <tr>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                        </table>
                    </body>
                    </html> <br>

                `;
                break;
                case 'suceava':
                weatherDetails.innerHTML = `
                    <h2>Suceava</h2>
                    <img src="images/suceava-weather.jpg" alt="Iași Weather">
                    <p>Suceava, city, capital of Suceava judeƫ (county), northeastern Romania. Founded on a terrace above the right bank of the Suceava River before the 14th century, it was the capital of Moldavia from 1388 until 1564, when the capital was moved to Iaşi.</p>
                    <p>Suceava, නගරය, Suceava judeƫ (county), ඊසානදිග රුමේනියාවේ අගනුවර. 14 වන ශතවර්ෂයට පෙර Suceava ගඟේ දකුණු ඉවුරට ඉහළින් ටෙරස් මත පිහිටුවන ලද එය 1388 සිට 1564 දක්වා අගනුවර Iaşi වෙත ගෙන යන තෙක් Moldavia හි අගනුවර විය.</p>
                `;
                break;
                case 'focsani':
                weatherDetails.innerHTML = `
                    <h2>focsani</h2>
                    <img src="images/focsani-neamt.jpg" alt="Iași Weather">
                    <p>As a town on the Moldavian-Wallachian border, Focșani developed into an important trade center halfway between the Russian Empire and the Balkans. A congress between Imperial Russian and Ottoman diplomats took place near the city in 1772. Near the town, the Ottomans suffered a severe defeat at the hands of the allied forces of the Habsburg monarchy under Prince Frederick Josias of Saxe-Coburg-Saalfeld and Imperial Russia under Alexander Suvorov in 1789 (see Battle of Focșani).</p>
                    <p>Moldavian-Wallachian දේශසීමාවේ නගරයක් ලෙස, Focřani රුසියානු අධිරාජ්‍යය සහ බෝල්කන් අතර අතරමග වැදගත් වෙළඳ මධ්‍යස්ථානයක් බවට වර්ධනය විය. ඉම්පීරියල් රුසියානු සහ ඔටෝමන් රාජ්‍ය තාන්ත්‍රිකයින් අතර සම්මේලනයක් 1772 දී නගරය අසල පැවැත්විණි. නගරය ආසන්නයේ, සැක්සෙ-කෝබර්ග්-සාල්ෆෙල්ඩ් සහ ඉම්පීරියල් රුසියාවේ ෆ්‍රෙඩ්රික් ජොසියස් කුමරු යටතේ හැබ්ස්බර්ග් රාජාණ්ඩුවේ මිත්‍ර හමුදාවන් අතින් ඔටෝමන්වරු දරුණු පරාජයකට ලක් වූහ. 1789 දී ඇලෙක්සැන්ඩර් සුවෝරොව් යටතේ (ෆොක්සනි සටන බලන්න).</p>
                `;
                break;
                case 'drobeta-turnu-severin':
                weatherDetails.innerHTML = `
                    <h2>Drobeta-Turnu-Severin</h2>
                    <img src="images/drobeta-turnu-severin.jpg" alt="Iași Weather">
                    <p>Drobeta–Turnu Severin, city, capital of Mehedinți județ (county), southwestern Romania. It is an important inland port on the Danube near the point where the river leaves the Iron Gate gorge.</p>
                    <p>Drobeta-Turnu Severin, නගරය, නිරිතදිග රුමේනියාවේ Mehedinśi județ (county) අගනුවර. එය ඩැනියුබ් ගඟේ යකඩ දොරටුවෙන් පිටවන ස්ථානයට ආසන්නව පිහිටි වැදගත් අභ්‍යන්තර වරායකි.</p>

                `;
                break;
                case 'targu-jiu':
                weatherDetails.innerHTML = `
                    <h2>Târgu Jiu</h2>
                    <img src="images/târgu-tiu.jpg" alt="Iași Weather">
                    <p>Târgu Jiu (Romanian pronunciation: [ˌtɨrɡu ˈʒiw], Hungarian: Zsilvásárhely) is the capital of Gorj County in the Oltenia region of Romania. It is situated on the Southern Sub-Carpathians, on the banks of the river Jiu.</p>
                    <p>Târgu Jiu (රුමේනියානු උච්චාරණය: [ˌtɨrɡu ˈʒiw], හංගේරියානු: Zsilvásárhely) යනු රුමේනියාවේ ඔල්ටේනියා ප්‍රදේශයේ ගෝර්ජ් ප්‍රාන්තයේ අගනුවරයි. එය පිහිටා ඇත්තේ ජියු නදියේ ඉවුරේ, දක්ෂිණ උප-කාපාතියන් හි ය.</p>

                `;
                break;
                case 'targoviste':
                weatherDetails.innerHTML = `
                    <h2>Targoviste</h2>
                    <img src="images/Târgoviște.jpg" alt="Iași Weather">
                    <p>Targoviste City is situated in the north part of Muntenia's historical region, in a downy relief area at the intersection of Sub Carpathian Hills with Targovistei's High Plain, part of the Romanian Plain. Dambovita and Ialomita Rivers meadows which cross Dambovita region are nearby.</p>
                    <p>Targoviste City පිහිටා ඇත්තේ Muntenia හි ඓතිහාසික කලාපයේ උතුරු කොටසේ, රුමේනියානු තැනිතලාවේ කොටසක් වන Targovistei's High Plain සමඟ උප කාර්පාතියන් කඳු මංසන්ධියේ පහත් සහන ප්‍රදේශයක ය. දම්බෝවිට ප්‍රදේශය හරහා ගමන් කරන දම්බෝවිට සහ ඉලෝමිටා ගංගාවේ තණබිම් ඒ අසලම පිහිටා ඇත.</p>

                `;
                break;
                case 'tulcea':
                weatherDetails.innerHTML = `
                    <h2>Tulcea</h2>
                    <img src="images/tulcea-weather.jpg" alt="Iași Weather">
                    <p>Tulcea is an ancient city. The Greeks and Romans called it Aegissus (Aegyssus). It is an important inland port, accessible from the Black Sea via the main Danube channels, and it is a centre for fishing and tourism along the smaller delta channels.</p>
                    <p>Tulcea යනු පුරාණ නගරයකි. ග්‍රීකයන් සහ රෝමවරුන් එය හැඳින්වූයේ Aegissus (Aegyssus) යනුවෙනි. එය වැදගත් අභ්‍යන්තර වරායක් වන අතර, කළු මුහුදේ සිට ප්‍රධාන ඩැනියුබ් නාලිකා හරහා ප්‍රවේශ විය හැකි අතර එය කුඩා ඩෙල්ටා නාලිකා ඔස්සේ මසුන් ඇල්ලීම සහ සංචාරක මධ්‍යස්ථානයකි.</p>
                    
                `;
                break;
                case 'bistrita':
                weatherDetails.innerHTML = `
                    <h2>Bistrita</h2>
                    <img src="images/bistrita.jpg" alt="Iași Weather">
                    <p>Bistrița (Romanian pronunciation: [ˈbistrit͡sa]; German: Bistritz, archaic Nösen, Transylvanian Saxon: Bästerts, Hungarian: Beszterce) is the capital city of Bistrița-Năsăud County, in northern Transylvania, Romania. It is situated on the Bistrița River.</p>
                    <p>Bistriśa (රුමේනියානු උච්චාරණය: [ˈbistrit͡sa]; ජර්මානු: Bistritz, archaic Nösen, Transylvanian Saxon: Bästerts, හංගේරියානු: Beszterce) යනු උතුරු රුමේනියාවේ ට්‍රාන්සිල්වේනියාවේ, Bistrița-Năsăud ප්‍රාන්තයේ අගනුවර වේ. එය බිස්ට්‍රිටා ගඟේ පිහිටා ඇත.</p>

                `;
                break;
                case 'resita':
                weatherDetails.innerHTML = `
                    <h2>Resita</h2>
                    <img src="images/resita.jpg" alt="Iași Weather">
                    <p>Resita Municipality, county seat of Caras-Severin County, lies in the south-western part of Romania. Resita is not only Romania's oldest iron-and-steel industrial center but also one of the most imposing industrial citadels of south-eastern Europe.</p>
                    <p>Resita මහ නගර සභාව, Caras-Severin ප්‍රාන්තයේ ප්‍රාන්ත ආසනය, රුමේනියාවේ නිරිතදිග කොටසේ පිහිටා ඇත. රෙසිටා යනු රුමේනියාවේ පැරණිතම යකඩ හා වානේ කාර්මික මධ්‍යස්ථානය පමණක් නොව ගිනිකොනදිග යුරෝපයේ වඩාත්ම බලගතු කාර්මික බලකොටු වලින් එකකි.</p>

                `;
                break;
                case 'slatina':
                weatherDetails.innerHTML = `
                    <h2>Slatina</h2>
                    <img src="images/slatina.jpg" alt="Iași Weather">
                    <p>Slatina (Romanian pronunciation: [ˈslatina], Bulgarian: Слатина) is the capital city of Olt County, Romania, on the river Olt. It is located in the south of Romania, on the eastern side of the river Olt, in the historical region of Muntenia.</p>
                    <p>ස්ලැටිනා (රුමේනියානු උච්චාරණය: [ˈslatina], බල්ගේරියානු: Слатина) යනු ඔල්ට් ගඟේ පිහිටි රුමේනියාවේ ඕල්ට් ප්‍රාන්තයේ අගනුවරයි. එය පිහිටා ඇත්තේ රුමේනියාවේ දකුණේ, ඕල්ට් ගඟේ නැගෙනහිර පැත්තේ, ඓතිහාසික මුන්ටේනියා ප්‍රදේශයේ ය.</p>

                `;
                break;
                case 'calarasi':
                weatherDetails.innerHTML = `
                    <h2>Calarasi</h2>
                    <img src="images/calarasi.jpg" alt="Iași Weather">
                    <p>Călăraşi, city, capital of Călăraşi judeƫ (county), southeastern Romania. It is located at the border with Bulgaria on the Borcea arm of the Danube and along Lake Călăraşi, about 60 mi (100 km) east-southeast of Bucharest. Călăraşi is first documented in 1593, during the reign of Michael the Brave (Mihai Viteazul).</p>
                    <p>Călăraşi, නගරය, ගිනිකොනදිග රුමේනියාවේ Călaraşi judeƫ (county) අගනුවර. එය ඩැනියුබ් හි බෝර්සියා බාහුවෙහි බල්ගේරියාවේ මායිමේ සහ බුකාරෙස්ට් සිට නැගෙනහිර-ගිණිකොන දෙසින් සැතපුම් 60 (කිලෝමීටර් 100) පමණ දුරින් කැලරාසි විල දිගේ පිහිටා ඇත. Călăraşi ප්‍රථම වරට ලේඛනගත කර ඇත්තේ 1593 දී, නිර්භීත මයිකල්ගේ (Mihai Viteazul) පාලන සමයේදීය.</p>

                `;
                break;
                case 'hunedoara':
                weatherDetails.innerHTML = `
                    <h2>Hunedoara</h2>
                    <img src="images/hunedoara.jpg" alt="Iași Weather">
                    <p>Hunedoara, judeƫ (county), western Romania, occupying an area of 2,727 square mi (7,063 square km). The Transylvanian Alps (Southern Carpathians) and the Western Carpathians rise above settlement areas in the valleys. The Mureş River and its tributaries drain the county southwestward. Deva is the county capital.</p>
                    <p>Hunedoara, judeƫ (county), බටහිර රුමේනියාව, වර්ග සැතපුම් 2,727 (වර්ග කි.මී. 7,063) ප්‍රදේශයක් අත්පත් කරගෙන ඇත. ට්‍රාන්සිල්වේනියානු ඇල්ප්ස් (දකුණු කාර්පාතියන්) සහ බටහිර කාර්පාතියන් නිම්නවල ජනාවාස ප්‍රදේශවලට වඩා ඉහළ යයි. මුරේස් ගඟ සහ එහි අතු ගංගා නිරිත දෙසින් ප්‍රාන්තය ගලා යයි. දේවා ප්‍රාන්ත අගනුවරයි.</p>

                `;
                break;
                case 'vaslui':
                weatherDetails.innerHTML = `
                    <h2>Vaslui</h2>
                    <img src="images/vaslui.jpg" alt="Iași Weather">
                    <p>Vaslui, judeƫ (county), eastern Romania, occupying an area of 2,053 square mi (5,318 square km), bounded on the east by Moldova. The terrain consists of rolling hills. The Elan, Bârlad, and Tutova rivers drain the county. Vaslui city is the county capital.</p>
                    <p>Vaslui, judeƫ (county), නැගෙනහිර රුමේනියාව, වර්ග සැතපුම් 2,053 (වර්ග කි.මී. 5,318) ප්‍රදේශයක් අත්පත් කරගෙන, නැගෙනහිරින් මෝල්ඩෝවාවෙන් මායිම් වේ. භූමිය පෙරළෙන කඳු වලින් සමන්විත වේ. Elan, Bârlad සහ Tutova ගංගා ප්රාන්තය ගලා යයි. Vaslui නගරය ප්රාන්ත අගනුවර වේ.</p>

                `;
                break;
                case 'zalau':
                weatherDetails.innerHTML = `
                    <h2>Zalau</h2>
                    <img src="images/zalau.jpg" alt="Iași Weather">
                    <p>After the conquest of Dacia by Trajan (106), the Roman Empire border stood atop the Meseș Mountains, just 5 km (3.1 mi) away from the city[citation needed]. Just north from the border, on the actual Zalău city area were the free Dacians tribes, and to the east, south-east (of Meseș Mountains) were Roman border fortifications, towers, walls, ditches and defense sides[citation needed].</p>
                    <p>ට්‍රේජන් (106) විසින් ඩේසියා යටත් කර ගැනීමෙන් පසුව, රෝමානු අධිරාජ්‍යයේ මායිම නගරයෙන් කිලෝමීටර 5ක් (සැතපුම් 3.1) දුරින් පිහිටි මෙසෙස් කඳු මුදුනේ පිහිටා ඇත[උපුටා දැක්වීම අවශ්‍ය]. මායිමේ සිට උතුරට වන්නට, සැබෑ සාලු නගර ප්‍රදේශයේ නිදහස් ඩේසියන් ගෝත්‍රිකයන් සිටි අතර, නැගෙනහිරින්, ගිනිකොන දෙසින් (මෙසෙස් කඳුකරයේ) රෝම දේශසීමා බලකොටු, කුළුණු, තාප්ප, අගල් සහ ආරක්ෂක පැති විය.</p>

                `;
                break;
                case 'giurgiu':
                weatherDetails.innerHTML = `
                    <h2>Giurgiu</h2>
                    <img src="images/giurgiu.jpg" alt="Iași Weather">
                    <p>Giurgiu is an important customs point for the traffic of passengers and merchandises. The city of is one of the most important Romanian ports on the Danube in the export of cereals, wood, and oil. In 1996 there was established the Giurgiu Free Zone with an area of 163.54 ha.</p>
                    <p>Giurgiu යනු මගීන්ගේ සහ වෙළඳ භාණ්ඩවල ගමනාගමනය සඳහා වැදගත් රේගු ස්ථානයකි. ධාන්‍ය, දැව සහ තෙල් අපනයනයේදී ඩැනියුබ් නදියේ ඇති වැදගත්ම රුමේනියානු වරායන්ගෙන් එකකි නගරය. 1996 දී හෙක්ටයාර 163.54 ක වපසරියකින් යුත් Giurgiu මුක්ත කලාපය පිහිටුවන ලදී.</p>

                `;
                break;
                
            // Add more cases for other cities
            default:
                weatherDetails.innerHTML = `<p>Please select a city.</p>`;
        }
    } else {
        weatherDetails.innerHTML = `<p>Please select a city.</p>`;
    }
});
