var urlParams = new URLSearchParams(window.location.search);
var showroomId = urlParams.get('showroom');

if (showroomId === 'ashel') {
    document.getElementById('namaMember').innerHTML = 'Ashel JKT48';
    document.getElementById('status').innerHTML = '• TBD';
    document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/1f4eca57063fe3f6be0bf5a66adefd5e3afa7395324c0a95e572a533c8c1f89a_s.jpeg?v=1675092239';
    document.getElementById('detailSr').innerHTML = 'Name: Adzana Shaliha アザナ・サリハ<br>Birthday: 8-January-2005<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Capricorn<br>Hobby: Dance, Gymnastic, Gaming';

    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Ashel';
} else if (showroomId === 'christy') {
    document.getElementById('namaMember').innerHTML = 'Christy JKT48';
    document.getElementById('status').innerHTML = '• TBD';
    document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/8b704fbdc371c9dd64fa6b2a15839ae3e912e9a5f76173d40502969a31a936f4_s.jpeg?v=1675092800';
    document.getElementById('detailSr').innerHTML = 'Name: Angelina Christy<br>Birthday: 5 December 2005<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Sagitarius<br>Hobby: Dancing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Christy';
}

else if (showroomId === 'zee') {
    document.getElementById('namaMember').innerHTML = 'Zee JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh7rirBOIBswX65Cba8hAoTIKvToPx5WRYw&usqp=CAU';
    document.getElementById('detailSr').innerHTML = 'Name: Azizi Asadel/アジジ・アサデル<br>Birthday: 16-May-2004<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Taurus<br>Hobby: Social media activities, Playing mobile games';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === 'oniel') {
    document.getElementById('namaMember').innerHTML = 'Oniel JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/6f5b72d14f8cf4d61ab8c16aa8b7a9c387c5f6de37f513a884b6fbadabb5784d_s.jpeg?v=1675092204';
    document.getElementById('detailSr').innerHTML = 'Name: Cornelia Vanisa / コルネリア・ファニサ<br>Birthday: 26-July-2002<br>Birthplace: Tangerang<br>Blood type: O<br>Zodiac signs: Leo<br>Hobby: Playing the guitar / ukulele, Listening music, Lettering';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Oniel';
}

else if (showroomId === 'olla') {
    document.getElementById('namaMember').innerHTML = 'Olla JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/79b9c42d1f5ea5d5805fefcfac6e92198e434cd6b6244c79b309b9e93ab3f7cb_s.jpeg?v=1675092110';
    document.getElementById('detailSr').innerHTML = 'Name: Febriola Sinambela / フェブリオラ・シナンベラ<br>Birthday: 26-February-2005<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Pisces<br>Hobby: Dance';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Olla';
}

else if (showroomId === 'feni') {
    document.getElementById('namaMember').innerHTML = 'Feni JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/bc8b10acffc5adee44b5d8b7dade3bc9435607fe3a766ae772ec633ac08b649b_s.jpeg?v=1675092939';
    document.getElementById('detailSr').innerHTML = 'Name: Feni Fitriyanti / フェニ・フィトゥリヤンティ<br>Birthday: 16-January-1999<br>Birthplace: Cianjur<br>Blood type: O<br>Zodiac signs: Capricorn<br>Hobby: Watching movies, Cooking, Dancing, Fashion';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Feni';
}

else if (showroomId === 'fiony') {
    document.getElementById('namaMember').innerHTML = 'Fiony JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/a2345e2127cf122ef7adb9d988a41e080dbd7f0db28bfc113335b7a341b68c7e_s.jpeg?v=1675092072';
    document.getElementById('detailSr').innerHTML = 'Name: Fiony Alveria / フィオニー・アルフェリア<br>Birthday: 4-February-2002<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Aquarius<br>Hobby: Dance, Drawing, Listening Music';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Fiony';
}

else if (showroomId === 'flora') {
    document.getElementById('namaMember').innerHTML = 'Flora JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/156b4510f644fe065936e8aa05361bfab6b13a8d0c3be8b4cd6ae75089b6e3cc_s.jpeg?v=1675092044';
    document.getElementById('detailSr').innerHTML = 'Name: Flora Shafiq / フロラ・シャフィック<br>Birthday: 4-April-2005<br>Birthplace: Tangerang<br>Blood type: B<br>Zodiac signs: Aries<br>Hobby: Lettering, Singing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Flora';
}

else if (showroomId === 'freya') {
    document.getElementById('namaMember').innerHTML = 'Freya JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/cd2b6cf94d461b64c9215d808c58d7cbf029cd8d624e5c59e9b3a10a34ecfe33_l.jpeg?v=1675091998';
    document.getElementById('detailSr').innerHTML = 'Name: Freya Jayawardana / フレヤ・ジャヤワルダナ<br>Birthday: 13-February-2006<br>Birthplace: Tangerang<br>Blood type: B<br>Zodiac signs: Aquarius<br>Hobby: Dance, Singing, Reading novel';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Freya';
}

else if (showroomId === 'gita') {
    document.getElementById('namaMember').innerHTML = 'Gita JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/388fa55ee4ee2a438a34d1b0a71de03f472b76b5560203930f103850edb577c8_s.jpeg?v=1675092700';
    document.getElementById('detailSr').innerHTML = 'Name: Gita Sekar Andarini<br>Birthday: 30 June 2001<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Cancer<br>Hobby: Reading, Playing with cats';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Gita';
}

else if (showroomId === 'eli') {
    document.getElementById('namaMember').innerHTML = 'Eli JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/6ac7ec5ce772cca881de55354f99c07c0987240e057c4f2fecb11024eeaae6a6_s.jpeg?v=1675092663';
    document.getElementById('detailSr').innerHTML = 'Name: Helisma Mauludzunia Putri Kurnia<br>Birthday: 15 June 2000<br>Birthplace: Bandung<br>Blood type: A<br>Zodiac signs: Gemini<br>Hobby: Coloring';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Eli';
}

else if (showroomId === 'indah') {
    document.getElementById('namaMember').innerHTML = 'Indah JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/58f3d939319e28956fd771e0f587a347ea0fec6b5c3415067e122f4794fd3514_s.jpeg?v=1675091960';
    document.getElementById('detailSr').innerHTML = 'Name: Indah Cahya / インダー・チャヤ<br>Birthday: 20-March-2001<br>Birthplace: Jambi<br>Blood type: A<br>Zodiac signs: Pisces<br>Hobby: Cooking, Traveling, Watching film';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Indah';
}

else if (showroomId === 'jessi') {
    document.getElementById('namaMember').innerHTML = 'Jessi JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/293a846d52a0e9b04a50dafb6c0f80367256a0f3e2a7d9fdc5e92e572ad2415f_s.jpeg?v=1675091920';
    document.getElementById('detailSr').innerHTML = 'Name: Jessica Chandra / ジェシカ・チャンドラ<br>Birthday: 23-September-2005<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Virgo<br>Hobby: Dance, Modelling, Make up';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Jessi';
}

else if (showroomId === 'kathrina') {
    document.getElementById('namaMember').innerHTML = 'Kathrina JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/8da2ecaebb02c89b4f12ac22ba4b76f9777f610cdaf3194d0f556146b69f240c_s.jpeg?v=1675091808';
    document.getElementById('detailSr').innerHTML = 'Name: Kathrina Irene / カトリナ・アイリン<br>Birthday: 16-July-2006<br>Birthplace: Bekasi<br>Blood type: A<br>Zodiac signs: Leo<br>Hobby: Drawing, Dance, Listening Music';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Kathrina';
}

else if (showroomId === 'lulu') {
    document.getElementById('namaMember').innerHTML = 'Lulu JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/b0dfb9a6b2a6d51b17d0149d72ac19992469d2734876ca2c1d55672ae91e0943_s.jpeg?v=1675091765';
    document.getElementById('detailSr').innerHTML = 'Name: Lulu Salsabila / ルル・サルサビラ<br>Birthday: 23-October-2002<br>Birthplace: Serang<br>Blood type: B<br>Zodiac signs: Libra<br>Hobby: Dance, Playing the piano, Cooking';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Lulu';
}

else if (showroomId === 'marsha') {
    document.getElementById('namaMember').innerHTML = 'Marsha JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/31c718d6829b5e484fac4f3284acc40a9788271be0066153cb2bb48880558507_s.jpeg?v=1675091709';
    document.getElementById('detailSr').innerHTML = 'Name: Marsha Lenathea / マーシャ・レナテェア<br>Birthday: 9-January-2006<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Capricorn<br>Hobby: Drawing, Listening music, Gaming';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Marsha';
}

else if (showroomId === 'muthe') {
    document.getElementById('namaMember').innerHTML = 'Muthe JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/d6cd1a52b06d7bed1bd0bda75b917eb18667e060c175952babc50733bf3a7e40_s.jpeg?v=1675092551';
    document.getElementById('detailSr').innerHTML = 'Name: Mutiara Azzahra Umandana<br>Birthday: 12 July 2004<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Cancer<br>Hobby: Dancing, Sewing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Muthe';
}

else if (showroomId === 'adel') {
    document.getElementById('namaMember').innerHTML = 'Adel JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/f459e9d740545298dcc1ac26e558b3c7a8a679a24369e1f86256b21c6faf4547_s.jpeg?v=1675091671';
    document.getElementById('detailSr').innerHTML = 'Name: Reva Fidelia / レファ・フィデラ<br>Birthday: 14-July-2006<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Cancer<br>Hobby: Travelling, Drawing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Adel';
}

else if (showroomId === 'shani') {
    document.getElementById('namaMember').innerHTML = 'Shani JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/15391680ed61e9c6c53454d5f56f63236e29a261ee5054e42daee3f04b630567_s.jpeg?v=1675092514';
    document.getElementById('detailSr').innerHTML = 'Name: Shani Indira Natio<br>Birthday: 5 October 1998<br>Birthplace: Kebumen<br>Blood type: B<br>Zodiac signs: Libra<br>Hobby: Swimming, Listening to music, Strolling';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Shani';
}

else if (showroomId === 'gracia') {
    document.getElementById('namaMember').innerHTML = 'Gracia JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/3026b77b664e3f6acc416ed606d20c23356fe91d18cb4345d53715ac50541912_s.jpeg?v=1675092465';
    document.getElementById('detailSr').innerHTML = 'Name: Shania Gracia<br>Birthday: 31 August 1999<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Virgo<br>Hobby: Traveling, Photoshoot, Playing ukulele';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Gracia';
}


else if (showroomId === 'chika') {
    document.getElementById('namaMember').innerHTML = 'Chika JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/2f6272c11bf11e91708e57bff7a9abb1faa9eebe18d1a211f05d7d6b71d0ef04_s.jpeg?v=1675092285';
    document.getElementById('detailSr').innerHTML = 'Name: Yessica Tamara<br>Birthday: 24 September 2002<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Libra<br>Hobby: Playing basketball, makeup art';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Chika';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}
else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}

else if (showroomId === ' ') {
    document.getElementById('namaMember').innerHTML = '';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}