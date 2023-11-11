var urlParams = new URLSearchParams(window.location.search);
var showroomId = urlParams.get('showroom');

if (showroomId === 'ashel') {
    document.getElementById('namaMember').innerHTML = 'Ashel JKT48';
    document.getElementById('status').innerHTML = '• TBD';
    document.getElementById('memberSt').innerHTML = 'Anggota JKT48';
    document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/1f4eca57063fe3f6be0bf5a66adefd5e3afa7395324c0a95e572a533c8c1f89a_s.jpeg?v=1675092239';
    document.getElementById('detailSr').innerHTML = 'Name: Adzana Shaliha アザナ・サリハ<br>Birthday: 8-January-2005<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Capricorn<br>Hobby: Dance, Gymnastic, Gaming';

    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Ashel';
} else if (showroomId === 'christy') {
    document.getElementById('namaMember').innerHTML = 'Christy JKT48';document.getElementById('memberSt').innerHTML = 'Anggota JKT48';
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

else if (showroomId === 'amanda') {
    document.getElementById('namaMember').innerHTML = 'Amanda JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/2f2a93fe26c52af0bb33db6044b796b9590efd9ed198b852184820bd9845fef6_s.jpeg?v=1685542722';
    document.getElementById('detailSr').innerHTML = 'Name: Amanda Puspita Sukma Mulyadewi<br>Birthday: 17 December 2004<br>Birthplace: Malang<br>Blood type: O<br>Zodiac signs: Sagitarius<br>Hobby: Dance, Automotive';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Amanda';
}

else if (showroomId === 'lia') {
    document.getElementById('namaMember').innerHTML = 'Lia JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/104f71ef35980e70baeb6a7ed59f18c7374f9a33bf7d1720a0581b8a0b2edb1e_s.jpeg?v=1685542598';
    document.getElementById('detailSr').innerHTML = 'Name: Aurellia<br>Birthday: 29 Oktober 2002<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Scorpio<br>Hobby: Dance, Listening to Music';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Lia';
}

else if (showroomId === 'callie') {
    document.getElementById('namaMember').innerHTML = 'Callie JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/8b558b8317e4ec4aa4d6afdb9c7c62675cdd352a49bf2a42d2900ec35aa32a67_s.jpeg?v=1685542636';
    document.getElementById('detailSr').innerHTML = 'Name: Callista Alifia Wardhana<br>Birthday: 8 August 2005<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Leo<br>Hobby: Dance, Listening to Music';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Callie';
}

else if (showroomId === 'ella') {
    document.getElementById('namaMember').innerHTML = 'Ella JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/33b9a09551fb56e388c636720e88c310983d759c7be62230d59aa4a84303e1dc_s.jpeg?v=1685542674';
    document.getElementById('detailSr').innerHTML = 'Name: Gabriela Abigail Mewengkang<br>Birthday: 7 August 2006<br>Birthplace: Jakarta<br>Blood type: B+<br>Zodiac signs: Leo<br>Hobby: Dance, Listening to Music, Drawing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Ella';
}

else if (showroomId === 'indira') {
    document.getElementById('namaMember').innerHTML = 'Indira JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/80e7ab4bb7445c959ca2bff7c44dac4cc7353bddc0d3c70b6928c00f67ccfc53_s.jpeg?v=1685542774';
    document.getElementById('detailSr').innerHTML = 'Name: Indira Putri Seruni<br>Birthday: 26 April 2004<br>Birthplace: Bandung<br>Blood type: A<br>Zodiac signs: Taurus<br>Hobby: Dance';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Indira';
}

else if (showroomId === 'lyn') {
    document.getElementById('namaMember').innerHTML = 'Lyn JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/261d835846ccd54052d7bede79f89171d1f79af054ada2fecf81086644ff6ea4_s.jpeg?v=1685542810';
    document.getElementById('detailSr').innerHTML = 'Name: Jesslyn Elly<br>Birthday: 13 September 2001<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Virgo<br>Hobby: Reading, Playing Music, Traveling';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Lyn';
}

else if (showroomId === 'raisha') {
    document.getElementById('namaMember').innerHTML = 'Raisha JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/b5e493484b3fdd07ebadfd478837295c9968208cf3721934b46611eca5cb92b8_s.jpeg?v=1685542844';
    document.getElementById('detailSr').innerHTML = 'Name: Raisha Syifa Wardhana<br>Birthday: 11 November 2007<br>Birthplace: Jakarta<br>Blood type: AB+<br>Zodiac signs: Scorpio<br>Hobby: Dance, Sing, Sport';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Raisha';
}

else if (showroomId === 'alya') {
    document.getElementById('namaMember').innerHTML = 'Alya JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/0a1644ab1bc0333a175bbd13744995241b42a796d81fb939b5def608942a8e96_s.jpeg?v=1683720288';
    document.getElementById('detailSr').innerHTML = 'Name: Alya Amanda<br>Birthday: 26 Agustus 2006<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Virgo<br>Hobby: Motorcycling, doing sunday morning rides';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Alya';
}

else if (showroomId === 'anindya') {
    document.getElementById('namaMember').innerHTML = 'Anindya JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/ab71b7dec20fb6950c5afba136808e39486665d861f0592d1457a9682f78736b_s.jpeg?v=1683720272';
    document.getElementById('detailSr').innerHTML = 'Name: Anindya Ramadhani<br>Birthday: 18 October 2005<br>Birthplace: Depok<br>Blood type: O<br>Zodiac signs: Libra<br>Hobby: Cooking, Baking, Art';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Anindya';
}

else if (showroomId === 'cathy') {
    document.getElementById('namaMember').innerHTML = 'Cathy JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/bd930dc883c8d96916deacf2bff1827f387b1cf86a3042b7fd95352c44a5bba3_s.jpeg?v=1683720304';
    document.getElementById('detailSr').innerHTML = 'Name: Cathleen Nixie<br>Birthday: 28 May 2009<br>Birthplace: Surabaya<br>Blood type: A<br>Zodiac signs: Gemini<br>Hobby: Make Up, Paintng, Playing Latto - Latto';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Cathy';
}

else if (showroomId === 'elin') {
    document.getElementById('namaMember').innerHTML = 'Elin JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/d0ab8b151a1a0f7c2a69ea29624ef4ae7800ef1bee00df7f8c0c1f103331079d_s.jpeg?v=1683720255';
    document.getElementById('detailSr').innerHTML = 'Name: Celline Thefani<br>Birthday: 9 April 2007<br>Birthplace: Tangerang<br>Blood type: O<br>Zodiac signs: Aries<br>Hobby: Badminton, Basketball, Mixing and matching outfits, Thrifting, Watching Korean or Chinese TV series';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Elin';
}

else if (showroomId === 'chelsea') {
    document.getElementById('namaMember').innerHTML = 'https://static.showroom-live.com/image/room/cover/b0c6197686670eb07c6f4c8bff0d2ca67b72f74280d04df61229076507dda3ff_s.jpeg?v=1683720353';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: Chelsea Davina<br>Birthday: 23 December 2009<br>Birthplace: Sydney<br>Blood type: B<br>Zodiac signs: Capricorn<br>Hobby: Playing guitar, swimming, modelling, dancing and crocheting.';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Chelsea';
}

else if (showroomId === 'cynthia') {
    document.getElementById('namaMember').innerHTML = 'Cynthia JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/e3e88b5c96d4af6c2bd0e951809d808214a6bb8837903c1d8a83fa87ad1ea080_s.jpeg?v=1683727584';
    document.getElementById('detailSr').innerHTML = 'Name: Cynthia Yaputera<br>Birthday: 22 November 2003<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Sagitarius<br>Hobby: Sleeping, make up, online shopping';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Cynthia';
}

else if (showroomId === 'danella') {
    document.getElementById('namaMember').innerHTML = 'Danella JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/002771d7d8969132b8749564920a354426fad0c56857e3818de960035c560ed7_s.jpeg?v=1683720314';
    document.getElementById('detailSr').innerHTML = 'Name: Dena Natalia<br>Birthday: 16 December 2005<br>Birthplace: Bekasi<br>Blood type: O<br>Zodiac signs: Sagitarius<br>Hobby: Dancing, Swimming';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Danella';
}
else if (showroomId === 'daisy') {
    document.getElementById('namaMember').innerHTML = 'Daisy JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/a5054230e2eeeae789ccdf134345e4f3cf05801d689d9ec57397d34eae090343_s.jpeg?v=1683720323';
    document.getElementById('detailSr').innerHTML = 'Name: Desy Natalia<br>Birthday: 16 December 2005<br>Birthplace: Bekasi<br>Blood type: O<br>Zodiac signs: Sagitarius<br>Hobby: Dancing, Swimming';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Daisy';
}

else if (showroomId === 'gendis') {
    document.getElementById('namaMember').innerHTML = 'Gendis JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/4e2f064db08d9b22d45a2ff98271ca8754e2f058981823193d38c8e22cb09e00_s.jpeg?v=1683720244';
    document.getElementById('detailSr').innerHTML = 'Name: Gendis Mayrannisa<br>Birthday: 23, June 2010<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Cancer<br>Hobby: Singing, Golf driving, Swimming';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Gendis';
}

else if (showroomId === 'gracie') {
    document.getElementById('namaMember').innerHTML = 'Gracie JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/510862226ac09996461772b226e5fa4a30ce574bce18672725724e0284c8fed2_s.jpeg?v=1683720231';
    document.getElementById('detailSr').innerHTML = 'Name: Grace Octaviani<br>Birthday: 18 October 2007<br>Birthplace: Tangerang<br>Blood type: B<br>Zodiac signs: Libra<br>Hobby: Dance, Fashion Design, Drawing.';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Gracie';
}

else if (showroomId === 'greesel') {
    document.getElementById('namaMember').innerHTML = 'Greesel JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/940f5a1692b60af65bcec53d6db81138436b4ada3b796b7f0ac69aab2c4870bd_s.jpeg?v=1683720219';
    document.getElementById('detailSr').innerHTML = 'Name: Greesella Adhalia<br>Birthday: 10 Januari 2006<br>Birthplace: Bogor<br>Blood type: O<br>Zodiac signs: Capricorn<br>Hobby: Acting, Watching movies, singing, reading manga';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Greesel';
}

else if (showroomId === 'jeane') {
    document.getElementById('namaMember').innerHTML = 'Jeane JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/cd068c05e4e342a9986c37a00f0342cfdfa346221a685af4e1f5fbe8a55ad58a_s.jpeg?v=1683720205';
    document.getElementById('detailSr').innerHTML = 'Name: Jeane Victoria<br>Birthday: 5 June 2006<br>Birthplace: Jakarta<br>Blood type: O<br>Zodiac signs: Gemini<br>Hobby: Food hunting, Swimming, Cooking, Art, Playing video games, singing';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Jeane';
}

else if (showroomId === 'michie') {
    document.getElementById('namaMember').innerHTML = 'Michie JKT48';
   document.getElementById('status').innerHTML = '• TBD'; document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/fc878be06fb484b4edcb8051e8456a93279b2395e711aada3d7547b1b78e3720_s.jpeg?v=1683720193';
    document.getElementById('detailSr').innerHTML = 'Name: Michelle Alexandra<br>Birthday: 22 April 2009<br>Birthplace: Jakarta<br>Blood type: A<br>Zodiac signs: Taurus<br>Hobby: Singing, Thrifting, Ready, Watching Korean TV series';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Michie';
}