const provincesData = {
    '亚洲': {
        '中国': {
            '狼塔C+V': [
                {name: '狼塔C+V', length: '120公里', time: '7-9天', startPoint: '呼图壁雀尔沟镇', endPoint: '巴伦台镇', waypoints: ['呼图壁河峡谷','高山牧场','台普希克马河','白杨沟达坂','狼塔达坂','冰大坂'], elevation: {max: 3860, ascent: 4800, descent: 3200}, intro: '新疆顶级徒步路线，穿越天山山脉核心区，途经冰川、森林、草甸，全程需翻越5座3000米以上达坂。'}
            ],
            '乌孙古道': [
                {name: '乌孙古道', length: '130公里', time: '6-8天', startPoint: '琼库什台村', endPoint: '黑英山乡', waypoints: ['高山湖泊','科克苏河','天堂湖','阿克布拉克达坂','包扎墩乌孙古城遗址'], elevation: {max: 3680, ascent: 3500, descent: 3000}, intro: '贯通天山南北的千年古道，连接伊犁与阿克苏，沿途可见乌孙古墓群、草原石人等历史遗迹，雪山草甸景观壮丽。'}
            ],
            '夏特古道': [
                {name: '夏特古道', length: '100公里', time: '5-7天', startPoint: '夏特温泉', endPoint: '破城子', waypoints: ['哈达木孜达坂','木扎尔特冰川','南木扎尔特河谷','军马场','古堡遗址'], elevation: {max: 3580, ascent: 3000, descent: 2800}, intro: '玄奘西行穿越的天险古道，集冰川、峡谷、火山地貌于一体，需跨越冰河和碎石坡。'}
            ],
            '墨脱徒步线': [
                {name: '墨脱徒步线', length: '110公里', time: '6-8天', startPoint: '派镇', endPoint: '墨脱县', waypoints: ['多雄拉山口','拉格','汗密','背崩','雅鲁藏布江大拐弯'], elevation: {max: 4220, ascent: 3600, descent: 4500}, intro: '中国最后通公路的县城，从雪山到热带雨林的垂直景观带，途经蚂蟥区、塌方区等危险路段。'}
            ],
            '念青东波密北线': [
                {name: '念青东波密北线', length: '150公里', time: '8-10天', startPoint: '波密县', endPoint: '林芝市', waypoints: ['嘎隆拉冰川','措学仁玛','巴松措','新措','鲁朗林海'], elevation: {max: 4900, ascent: 5500, descent: 5000}, intro: '穿越念青唐古拉山东段的秘境路线，串联多个高山湖泊和原始森林，需穿越无人区。'}
            ],
            '喀纳斯东西线': [
                {name: '喀纳斯东西线', length: '120公里', time: '6-8天', startPoint: '贾登峪', endPoint: '白哈巴村', waypoints: ['禾木村','小黑湖','喀纳斯湖','那仁牧场','双湖'], elevation: {max: 2500, ascent: 3500, descent: 3000}, intro: '阿尔泰山脉黄金秋色路线，穿越图瓦人村落和原始泰加林，9月层林尽染时最为壮观。'}
            ],
            '梅里外转': [
                {name: '梅里外转', length: '180公里', time: '10-12天', startPoint: '永支村', endPoint: '永支村', waypoints: ['多克拉垭口','察瓦龙','说拉垭口','梅里水'], elevation: {max: 4815, ascent: 6000, descent: 6000}, intro: '藏传佛教八大神山之一的朝圣环线，全程围绕卡瓦格博峰，需穿越滇藏交界处的原始森林和高山垭口。'}
            ],
            '贡嘎转山': [
                {name: '贡嘎转山', length: '140公里', time: '7-9天', startPoint: '老榆林', endPoint: '草科乡', waypoints: ['日乌且垭口','莫溪沟','贡嘎寺','巴王海'], elevation: {max: 4920, ascent: 5000, descent: 4500}, intro: '近距离仰望蜀山之王贡嘎雪峰的经典环线，途经冰川、温泉和高山牧场，天气多变挑战极大。'}
            ],
            '格聂C线': [
                {name: '格聂C线', length: '160公里', time: '8-10天', startPoint: '喇嘛垭乡', endPoint: '巴塘县', waypoints: ['冷古寺','热梯河谷','格聂之眼','肖扎湖'], elevation: {max: 5024, ascent: 5800, descent: 5200}, intro: '横断山脉最后的秘境，穿越格聂神山核心区，途经藏传佛教寺庙和野生温泉群。'}
            ],
            '麦理浩径': [
                {name: '麦理浩径', length: '100公里', time: '4-5天', startPoint: '北潭涌', endPoint: '屯门', waypoints: ['万宜水库','西湾山','浪茄湾','马鞍山','大帽山'], elevation: {max: 957, ascent: 4500, descent: 4500}, intro: '香港首条长途远足径，横跨8个郊野公园，第二段海景最为著名，被《国家地理》评为全球最佳步道之一。'}
            ]
        },
        '尼泊尔': {
            '安娜普尔纳大环线': [
                {name: '安娜普尔纳大环线', length: '160-230公里', time: '15-20天', startPoint: 'Besisahar', endPoint: 'Nayapul', waypoints: ['Manang','Thorong La Pass(5416m)','Muktinath','Jomsom'], elevation: {max: 5416, ascent: 9800, descent: 9800}, intro: '环绕安娜普尔纳峰的经典路线，穿越从热带雨林到高原荒漠的垂直生态，需翻越海拔5416米的陀龙垭口。'}
            ],
            '珠峰大本营徒步': [
                {name: '珠峰大本营徒步', length: '130公里', time: '12-14天', startPoint: 'Lukla', endPoint: 'Lukla', waypoints: ['Namche Bazaar','Tengboche','Dingboche','Gorak Shep','Kala Patthar'], elevation: {max: 5545, ascent: 8500, descent: 8500}, intro: '世界最高峰的接近路线，途经夏尔巴人村落和藏传佛教寺庙，终点可近距离观赏珠峰冰川。'}
            ],
            '马纳斯鲁环线': [
                {name: '马纳斯鲁环线', length: '180公里', time: '14-16天', startPoint: 'Soti Khola', endPoint: 'Dharapani', waypoints: ['Jagat','Samagaon','Larkya La Pass(5160m)','Bimthang'], elevation: {max: 5160, ascent: 9000, descent: 8500}, intro: '世界第八高峰的徒步环线，比EBC更原始宁静，需穿越杜鹃花林和高海拔牧场。'}
            ],
            '朗塘高原徒步': [
                {name: '朗塘高原徒步', length: '220公里', time: '18-21天', startPoint: 'Koto', endPoint: 'Simikot', waypoints: ['Phu Village','Naar','Yari','Hilsa'], elevation: {max: 5320, ascent: 11000, descent: 10000}, intro: '尼泊尔最偏远的徒步区域之一，穿越藏文化保留完整的秘境山谷，需办理特殊许可证。'}
            ]
        },
        '不丹': {
            '雪人小径': [
                {name: '雪人小径', length: '300公里', time: '25天', startPoint: 'Paro', endPoint: 'Bumthang', waypoints: ['Jangothang','Laya','Lunana','Sephu'], elevation: {max: 5320, ascent: 15000, descent: 14000}, intro: '被Lonely Planet评为全球最难步道，全程海拔超3500米，穿越11个海拔超4500米的垭口，仅50%徒步者能完成全程。'}
            ]
        },
        '印度': {
            '赞斯卡冰川穿越': [
                {name: '赞斯卡冰川穿越', length: '150公里', time: '10-12天', startPoint: 'Stongde', endPoint: 'Sham Valley', waypoints: ['Parfi La','Lunag','Phirtse La','Kargyak','Shingo La'], elevation: {max: 5090, ascent: 9200, descent: 8700}, intro: '喜马拉雅西部的荒野穿越，途经佛教寺院和原始村落，需跨越冰川和5000米以上垭口。'}
            ],
            '印度冰河之旅': [
                {name: '印度冰河之旅', length: '105公里', time: '9-18天', startPoint: 'Chilling', endPoint: 'Nerak', waypoints: ['Tilat Sumdo','Shingra Koma','Tibb Cave'], elevation: {max: 3850, ascent: 6000, descent: 5500}, intro: '冬季沿结冰的赞斯卡河行走的极限路线，夜间温度低至-35°C，需用溜冰方式前进。'}
            ]
        },
        '巴基斯坦': {
            'K2大本营徒步': [
                {name: 'K2大本营徒步', length: '180公里', time: '14-16天', startPoint: 'Askole', endPoint: 'Askole', waypoints: ['Jula','Paiju','Urdukas','Goro II','Concordia','Broad Peak BC','Godwin-Austen冰川'], elevation: {max: 5100, ascent: 11000, descent: 11000}, intro: '挑战世界第二高峰的极限路线，穿越巴尔托洛冰川，沿途可见4座8000米级雪山。'}
            ],
            'Hispar-Biafo冰川穿越': [
                {name: 'Hispar-Biafo冰川穿越', length: '120公里', time: '12-14天', startPoint: 'Askole', endPoint: 'Hispar Village', waypoints: ['Biafo Glacier','Snow Lake','Hispar La(5151m)'], elevation: {max: 5151, ascent: 9500, descent: 9000}, intro: '世界最长非极地冰川系统穿越，需在冰塔林间行走，Snow Lake区域被誉为"冰冻的撒哈拉"。'}
            ]
        },
        '日本': {
            '北阿尔卑斯纵走': [
                {name: '北阿尔卑斯纵走', length: '160公里', time: '10-12天', startPoint: 'Kamikochi', endPoint: 'Tateyama', waypoints: ['Hotaka-dake','Yari-ga-take','Shirouma-dake','Tsuri-go-dake'], elevation: {max: 3190, ascent: 12000, descent: 11000}, intro: '日本"屋顶之路"，串联飞驒山脉主要山峰，需穿越多个险峻山脊和雪溪。'}
            ],
            '熊野古道': [
                {name: '熊野古道', length: '170公里', time: '7-9天', startPoint: 'Takijiri-oji', endPoint: 'Kumano Hongu Taisha', waypoints: ['Chikatsuyu-oji','Hosshinmon-oji','Fushiogami-oji'], elevation: {max: 1100, ascent: 6000, descent: 5500}, intro: '联合国世界遗产朝圣路线，穿越纪伊半岛的原始森林，连接三大神社，石板路保存完好。'}
            ]
        },
        '中亚': {
            '帕米尔高原穿越': [
                {name: '帕米尔高原穿越', length: '200公里', time: '14-16天', startPoint: 'Osh', endPoint: 'Murghab', waypoints: ['Tulpar Kol Lake','Ak-Baital Pass(4655m)','Bulunkul Lake'], elevation: {max: 4655, ascent: 8000, descent: 7500}, intro: '"世界屋脊"上的史诗路线，途经塔吉克斯坦与吉尔吉斯斯坦边境，体验帕米尔游牧文化。'}
            ],
            '天山山脉跨国穿越': [
                {name: '天山山脉跨国穿越', length: '180公里', time: '12-14天', startPoint: 'Almaty', endPoint: 'Bishkek', waypoints: ['Big Almaty Lake','Kolsai Lakes','Chon-Kemin Valley'], elevation: {max: 4200, ascent: 7000, descent: 6500}, intro: '横跨哈萨克斯坦与吉尔吉斯斯坦的天山核心区穿越，夏季高山花海与冰川湖泊交相辉映。'}
            ]
        },
        '泰国': {
            '因他农山穿越': [
                {name: '因他农山穿越', length: '60公里', time: '3-4天', startPoint: 'Mae Klang Waterfall', endPoint: 'Kew Mae Pan', waypoints: ['Doi Inthanon Summit(2565m)','Wachirathan Waterfall','Phra Mahathat Naphamethanidon'], elevation: {max: 2565, ascent: 3000, descent: 2500}, intro: '泰国最高峰徒步路线，穿越热带雨林和山地部落村庄，11-5月为最佳季节。'}
            ]
        },
        '韩国': {
            '济州偶来小路': [
                {name: '济州偶来小路', length: '200公里', time: '7-9天', startPoint: 'Seogwipo', endPoint: 'Jeju City', waypoints: ['Seongsan Ilchulbong','Manjanggul Cave','Hallasan Summit(1950m)'], elevation: {max: 1950, ascent: 5000, descent: 4500}, intro: '环济州岛的火山海岸徒步系统，串联世界自然遗产景点，可分段完成。'}
            ]
        }
    },
    '欧洲': {
        '法国': {
            '环勃朗峰徒步(TMB)': [
                {name: '环勃朗峰徒步(TMB)', length: '170公里', time: '10-12天', startPoint: '霞慕尼', endPoint: '霞慕尼', waypoints: ['Les Houches','Les Contamines','Col de la Seigne','Courmayeur','La Fouly','Champex','Col de la Forclaz','Tré-le-Champ'], elevation: {max: 2665, ascent: 10000, descent: 10000}, intro: '环绕欧洲最高峰勃朗峰的经典跨国路线，穿越法国、意大利和瑞士，途经高山牧场、冰川和阿尔卑斯村庄。'}
            ],
            'GR20': [
                {name: 'GR20', length: '180公里', time: '15天', startPoint: '卡尔维', endPoint: '孔卡', waypoints: ['Calenzana','Haut Asco','Col de Vergio','Vizzavona','Bocca di Verdi','Paliri'], elevation: {max: 2537, ascent: 12000, descent: 11000}, intro: '科西嘉岛上的"欧洲最难徒步路线"，需穿越锯齿状花岗岩山脉、高山湖泊和茂密森林，技术要求高。'}
            ]
        },
        '瑞士': {
            '阿尔卑斯山穿越': [
                {name: '阿尔卑斯山穿越', length: '350公里', time: '20-25天', startPoint: '萨梅丹', endPoint: '日内瓦', waypoints: ['Bernina Pass','Poschiavo','Bivio','Avers Valley','Splügen Pass','Andermatt','Furka Pass','Grimsel Pass','Lauterbrunnen','Gstaad'], elevation: {max: 3000, ascent: 15000, descent: 14000}, intro: '横跨瑞士全境的史诗级穿越路线，途经伯尔尼高地、少女峰地区等著名景观区，需翻越多座高山垭口。'}
            ],
            '少女峰地区大环线': [
                {name: '少女峰地区大环线', length: '120公里', time: '7-9天', startPoint: '格林德瓦', endPoint: '格林德瓦', waypoints: ['Kleine Scheidegg','Männlichen','Wengen','Mürren','Schilthorn','Griesalp','Kandersteg'], elevation: {max: 2970, ascent: 8000, descent: 8000}, intro: '环绕少女峰三峰的经典路线，途经高山湖泊、冰川和传统瑞士村庄，可近距离观赏艾格峰北壁。'}
            ]
        },
        '意大利': {
            '多洛米蒂高山路线2号(AV2)': [
                {name: '多洛米蒂高山路线2号(AV2)', length: '185公里', time: '12-15天', startPoint: '布雷萨诺内', endPoint: '费尔特雷', waypoints: ['Plose','Peitlerkofel','Geisler Group','Puez Group','Sella Group','Marmolada','Pala Group'], elevation: {max: 2912, ascent: 11000, descent: 10000}, intro: '多洛米蒂世界遗产核心区的技术型路线，需使用铁索攀岩装备，穿越石灰岩尖峰和战争遗迹。'}
            ],
            '大天堂国家公园穿越': [
                {name: '大天堂国家公园穿越', length: '150公里', time: '10-12天', startPoint: '库马约尔', endPoint: '瓦莱达奥斯塔', waypoints: ['Valnontey','Col del Lauson','Col du Nivolet','Piani del Nivolet','Colle della Porta','Val Savarenche'], elevation: {max: 3300, ascent: 9000, descent: 8500}, intro: '穿越意大利最古老国家公园，可近距离观察阿尔卑斯野山羊和土拨鼠，途经冰川和4000米级山峰。'}
            ]
        },
        '西班牙': {
            'GR11比利牛斯山穿越': [
                {name: 'GR11比利牛斯山穿越', length: '840公里', time: '45-50天', startPoint: '卡普德奎尔', endPoint: '洪克拉', waypoints: ['Refugio de Lizara','Valle de Tena','Parque Nacional de Ordesa','Refugio de Viados','Val d Aran','Andorra','Núria Valley'], elevation: {max: 2800, ascent: 40000, descent: 39000}, intro: '横贯西班牙比利牛斯山脉的史诗级路线，从地中海到大西洋，穿越多个国家公园和自然保护区。'}
            ],
            '朝圣之路北方之路': [
                {name: '朝圣之路北方之路', length: '825公里', time: '35-40天', startPoint: '伊伦', endPoint: '圣地亚哥', waypoints: ['San Sebastián','Bilbao','Santander','Ribadeo','Arzúa'], elevation: {max: 600, ascent: 15000, descent: 14500}, intro: '中世纪朝圣者避开摩尔人控制的南方而开辟的北方海岸路线，途经巴斯克地区和坎塔布里亚山脉。'}
            ]
        },
        '挪威': {
            '尤通黑门山脉穿越': [
                {name: '尤通黑门山脉穿越', length: '200公里', time: '12-15天', startPoint: 'Gjendesheim', endPoint: 'Sota Sæter', waypoints: ['Memurubu','Glitterheim','Spiterstulen','Leirvassbu','Skogadalsbøen','Fondsbu'], elevation: {max: 1900, ascent: 10000, descent: 9500}, intro: '挪威最壮观的荒野穿越路线，途经冰川、高山湖泊和北欧最高峰加尔赫峰(2469m)。'}
            ],
            '国王之路(Kungsleden)': [
                {name: '国王之路(Kungsleden)', length: '440公里', time: '25-30天', startPoint: '阿比斯库', endPoint: '赫马万', waypoints: ['Alesjaure','Tjäktja Pass','Sälka','Kebnekaise','Saltoluokta','Kvikkjokk','Ammarnäs'], elevation: {max: 1150, ascent: 12000, descent: 12000}, intro: '瑞典拉普兰地区的北极荒野路线，穿越欧洲最大无人区之一，夏季极昼和秋季极光季最为壮观。'}
            ]
        },
        '冰岛': {
            'Laugavegur徒步路线': [
                {name: 'Laugavegur徒步路线', length: '55公里', time: '4-5天', startPoint: 'Landmannalaugar', endPoint: 'Þórsmörk', waypoints: ['Hrafntinnusker','Álftavatn','Hvanngil','Emstrur'], elevation: {max: 1100, ascent: 2500, descent: 2000}, intro: '冰岛最著名的多日徒步路线，穿越彩色流纹岩山脉、地热区和冰川河流，景观如外星世界。'}
            ],
            'Fimmvörðuháls徒步路线': [
                {name: 'Fimmvörðuháls徒步路线', length: '25公里', time: '1-2天', startPoint: 'Skógar', endPoint: 'Þórsmörk', waypoints: ['Skógafoss瀑布','Baldvinsskáli','Magni和Modi火山口','Morinsheiði高原'], elevation: {max: 1100, ascent: 1500, descent: 1000}, intro: '连接两大冰川的火山高地路线，途经2010年埃亚菲亚德拉冰盖火山喷发形成的新火山口。'}
            ]
        },
        '奥地利': {
            '阿尔卑斯山脊之路': [
                {name: '阿尔卑斯山脊之路', length: '500公里', time: '30-35天', startPoint: '维也纳', endPoint: '费尔德基希', waypoints: ['Rax','Hochschwab','Dachstein','Tennengebirge','Loferer Steinberge','Kaisergebirge','Rofangebirge'], elevation: {max: 3000, ascent: 25000, descent: 24000}, intro: '沿奥地利阿尔卑斯主山脊延伸的史诗级路线，穿越9个山脉和多个国家公园，技术难度较高。'}
            ],
            'Eagle Walk': [
                {name: 'Eagle Walk', length: '413公里', time: '24-28天', startPoint: 'Kaisergebirge', endPoint: 'Carnic Alps', waypoints: ['Wilder Kaiser','Zillertal Alps','Venediger Group','Glockner Group','Schober Group','Kreuzeck Group'], elevation: {max: 3798, ascent: 22000, descent: 21000}, intro: '蒂罗尔州的标志性徒步路线，形似展翅雄鹰，途经奥地利最高峰大钟山和多个冰川地区。'}
            ]
        },
        '德国': {
            '阿尔卑斯山穿越路线': [
                {name: '阿尔卑斯山穿越路线', length: '350公里', time: '20-25天', startPoint: 'Oberstdorf', endPoint: 'Berchtesgaden', waypoints: ['Allgäu Alps','Lechtal Alps','Wetterstein','Karwendel','Bavarian Prealps','Chiemgau Alps'], elevation: {max: 2962, ascent: 18000, descent: 17000}, intro: '穿越德国巴伐利亚阿尔卑斯山脉的完整路线，途经楚格峰、国王湖等著名景点，需翻越多个高山垭口。'}
            ],
            'Rennsteig徒步路线': [
                {name: 'Rennsteig徒步路线', length: '170公里', time: '8-10天', startPoint: 'Hörschel', endPoint: 'Blankenstein', waypoints: ['Großer Inselsberg','Schmücke','Allzunah','Dreiherrenstein','Steinbach am Wald'], elevation: {max: 983, ascent: 5000, descent: 4500}, intro: '德国最古老的长距离徒步路线，沿图林根森林山脊延伸，途经中世纪边界石和冷战争遗迹。'}
            ]
        },
        '英国': {
            '西高地之路': [
                {name: '西高地之路', length: '154公里', time: '7-9天', startPoint: 'Milngavie', endPoint: 'Fort William', waypoints: ['Drymen','Conic Hill','Loch Lomond','Inverarnan','Tyndrum','Bridge of Orchy','Glen Coe','Devils Staircase'], elevation: {max: 550, ascent: 6000, descent: 5800}, intro: '苏格兰最著名的长距离徒步路线，从格拉斯哥郊外到英国最高峰本尼维斯山脚，途经洛蒙德湖和格伦科峡谷。'}
            ],
            '奔宁之路': [
                {name: '奔宁之路', length: '431公里', time: '18-21天', startPoint: 'Edale', endPoint: 'Kirk Yetholm', waypoints: ['Kinder Scout','Bleaklow','Malham Cove','Pen-y-ghent','Cross Fell','Cheviot Hills'], elevation: {max: 893, ascent: 12000, descent: 12000}, intro: '纵贯英格兰脊梁的史诗路线，穿越峰区、约克郡谷地和诺森伯兰国家公园，以泥泞难行著称。'}
            ]
        },
        '希腊': {
            '奥林匹斯山穿越': [
                {name: '奥林匹斯山穿越', length: '100公里', time: '6-8天', startPoint: 'Litochoro', endPoint: 'Dion', waypoints: ['Prionia','Spilios Agapitos Refuge','Skala Peak','Mytikas Summit','Plateau of the Muses','Petrostrouga Refuge'], elevation: {max: 2918, ascent: 7000, descent: 6500}, intro: '希腊神话中众神之家的穿越路线，从爱琴海沿岸直达希腊最高峰米提卡斯峰顶，技术难度较高。'}
            ],
            'Menalon Trail': [
                {name: 'Menalon Trail', length: '75公里', time: '4-6天', startPoint: 'Stemnitsa', endPoint: 'Lagkadia', waypoints: ['Dimitsana','Zygovisti','Elati','Vytina','Nymfasia'], elevation: {max: 1650, ascent: 5000, descent: 4800}, intro: '伯罗奔尼撒半岛中部山区路线，穿越深邃峡谷和传统石头村庄，途经拜占庭修道院和古剧场遗址。'}
            ]
        },
        '葡萄牙': {
            '历史之路(Rota Vicentina)': [
                {name: '历史之路(Rota Vicentina)', length: '230公里', time: '12-14天', startPoint: 'Santiago do Cacém', endPoint: 'Cabo de São Vicente', waypoints: ['Vale Seco','Cercal do Alentejo','Odemira','Aljezur','Carrapateira','Vila do Bispo'], elevation: {max: 300, ascent: 6000, descent: 6000}, intro: '沿葡萄牙西南海岸延伸的史诗路线，结合渔村小道和历史朝圣路径，可观赏大西洋悬崖和候鸟栖息地。'}
            ],
            'GR22': [
                {name: 'GR22', length: '220公里', time: '10-12天', startPoint: 'Cascais', endPoint: 'Serra da Estrela', waypoints: ['Sintra','Mafra','Aldeia do Mato','Barragem do Castelo do Bode','Tomar','Belmonte'], elevation: {max: 1993, ascent: 8000, descent: 7500}, intro: '从大西洋海岸到葡萄牙大陆最高峰的穿越路线，途经辛特拉文化景观和多个中世纪城堡与修道院。'}
            ]
        },
        '波兰/斯洛伐克': {
            '塔特拉山主脊穿越': [
                {name: '塔特拉山主脊穿越', length: '120公里', time: '7-9天', startPoint: 'Huciańska Przełęcz', endPoint: 'Zdziarska Przełęcz', waypoints: ['Rysy峰','Mięguszowiecka Przełęcz','Kozi Wierch','Orla Perć','Kasprowy Wierch','Giewont'], elevation: {max: 2499, ascent: 9000, descent: 8500}, intro: '波兰与斯洛伐克边境的高难度技术路线，需使用铁索和攀岩装备穿越锯齿状花岗岩山脊。'}
            ],
            'Beskid山脉大穿越': [
                {name: 'Beskid山脉大穿越', length: '500公里', time: '25-30天', startPoint: 'Ustroń', endPoint: 'Wołosate', waypoints: ['Barania Góra','Babia Góra','Pilsko','Tarnica','Wetlina','Cisna'], elevation: {max: 1725, ascent: 20000, descent: 19500}, intro: '穿越喀尔巴阡山脉西部Beskid山系的史诗路线，途经波兰、斯洛伐克和乌克兰边境的原始森林和牧羊人小屋。'}
            ]
        },
        '罗马尼亚': {
            'Făgăraș山脉主脊穿越': [
                {name: 'Făgăraș山脉主脊穿越', length: '90公里', time: '7-9天', startPoint: 'Turnu Roșu', endPoint: 'Bâlea Lac', waypoints: ['Vânătarea lui Buteanu','Moldoveanu峰','Negoiu峰','Șerbota山','Podragu山'], elevation: {max: 2544, ascent: 8000, descent: 7500}, intro: '穿越罗马尼亚喀尔巴阡山脉最高段的路线，途经欧洲最长的连续高山山脊和多个冰川湖泊，棕熊出没频繁。'}
            ],
            'Retezat国家公园穿越': [
                {name: 'Retezat国家公园穿越', length: '80公里', time: '6-8天', startPoint: 'Câmpu lui Neag', endPoint: 'Ostrov', waypoints: ['Bucura湖','Peleaga峰','Papușa山','Judele山','Zănoaga湖'], elevation: {max: 2509, ascent: 7000, descent: 6500}, intro: '穿越"喀尔巴阡山脉皇冠上的明珠"，途经80个冰川湖泊和欧洲最丰富的原生植物群落之一。'}
            ]
        },
        '保加利亚': {
            '科米-埃米内穿越': [
                {name: '科米-埃米内穿越', length: '650公里', time: '30-35天', startPoint: 'Kom Peak', endPoint: 'Cape Emine', waypoints: ['Vitosha山','Rila Monastery','Musala峰','Pirin国家公园','Slavyanka山','Strandzha山'], elevation: {max: 2925, ascent: 30000, descent: 29000}, intro: '纵贯保加利亚全境的史诗路线，从塞尔维亚边境到黑海沿岸，穿越巴尔干山脉和罗多彼山脉最高峰。'}
            ],
            'Pirin山脉穿越': [
                {name: 'Pirin山脉穿越', length: '120公里', time: '8-10天', startPoint: 'Predel', endPoint: 'Paril', waypoints: ['Vihren峰','Koncheto山脊','Polezhan峰','Popovo湖','Bezbog峰'], elevation: {max: 2914, ascent: 9000, descent: 8500}, intro: '穿越保加利亚最壮观的石灰岩山脉，途经锋利山脊和技术性路段，需使用铁索和攀岩装备。'}
            ]
        },
        '格鲁吉亚': {
            '高加索山脉穿越': [
                {name: '高加索山脉穿越', length: '300公里', time: '18-21天', startPoint: 'Mestia', endPoint: 'Omalo', waypoints: ['Ushguli','Adishi冰川','Tetra山','Juta村','Roshka村','Shatili'], elevation: {max: 3431, ascent: 15000, descent: 14000}, intro: '穿越格鲁吉亚高加索山脉核心区的史诗路线，途经中世纪防御塔群、冰川和传统斯瓦涅季村庄。'}
            ],
            'Tusheti国家公园穿越': [
                {name: 'Tusheti国家公园穿越', length: '150公里', time: '9-12天', startPoint: 'Kvemo Alvani', endPoint: 'Shatili', waypoints: ['Abano Pass','Dartlo村','Parsma村','Chesho村','Indurta村'], elevation: {max: 2920, ascent: 8000, descent: 7500}, intro: '穿越欧洲最偏远国家公园之一的路线，途经高加索游牧民族传统村落，需骑马或徒步穿越多个高山垭口。'}
            ]
        },
        '土耳其': {
            '利西亚之路': [
                {name: '利西亚之路', length: '540公里', time: '25-30天', startPoint: 'Fethiye', endPoint: 'Antalya', waypoints: ['Ölüdeniz','Patara','Kalkan','Kaş','Demre','Olympos','Çıralı'], elevation: {max: 1800, ascent: 15000, descent: 14500}, intro: '沿土耳其地中海沿岸延伸的史诗路线，穿越古代利西亚文明遗迹、雪松森林和石灰岩峡谷。'}
            ],
            '卡奇卡尔山脉穿越': [
                {name: '卡奇卡尔山脉穿越', length: '200公里', time: '12-15天', startPoint: 'Ayder', endPoint: 'Barhal', waypoints: ['Kavron Valley','Dilberdüzü Plateau','Altıparmak Pass','Yusufeli','Kaçkar峰'], elevation: {max: 3932, ascent: 10000, descent: 9500}, intro: '穿越土耳其东北部高加索山脉延伸段的路线，途经高山湖泊、冰川和传统黑海山区村庄。'}
            ]
        },
        '斯洛文尼亚': {
            '阿尔卑斯山穿越': [
                {name: '阿尔卑斯山穿越', length: '600公里', time: '30-35天', startPoint: 'Maribor', endPoint: 'Ankaran', waypoints: ['Pohorje','Kamnik Alps','Triglav National Park','Julian Alps','Soča Valley','Karst Plateau'], elevation: {max: 2864, ascent: 25000, descent: 24000}, intro: '横贯斯洛文尼亚全境的史诗路线，从奥地利边境到亚得里亚海，穿越朱利安阿尔卑斯山和喀斯特高原。'}
            ],
            'Triglav环线': [
                {name: 'Triglav环线', length: '80公里', time: '5-7天', startPoint: 'Bohinj湖', endPoint: 'Bohinj湖', waypoints: ['Komna Plateau','Triglav Lakes Valley','Dolič Pass','Trenta Valley','Vršič Pass'], elevation: {max: 2515, ascent: 6000, descent: 6000}, intro: '环绕斯洛文尼亚最高峰特里格拉夫峰的经典路线，穿越国家公园核心区，途经七个冰川湖泊和多个高山垭口。'}
            ]
        },
        '克罗地亚': {
            'Velebit山脉穿越': [
                {name: 'Velebit山脉穿越', length: '100公里', time: '7-9天', startPoint: 'Zavižan', endPoint: 'Baške Oštarije', waypoints: ['Rossijeva Koliba','Alan山','Babin Kuk','Štirovača','Veliki Alan Pass','Premužić Trail'], elevation: {max: 1757, ascent: 7000, descent: 6500}, intro: '穿越克罗地亚最大山脉的路线，沿Premužić小径延伸，途经喀斯特地貌、原始山毛榉森林和亚得里亚海观景点。'}
            ],
            'Dinara山脉穿越': [
                {name: 'Dinara山脉穿越', length: '150公里', time: '10-12天', startPoint: 'Knin', endPoint: 'Livno', waypoints: ['Dinara峰','Troglav峰','Kamešnica山','Glavaš山','Buško Blato湖'], elevation: {max: 1831, ascent: 8000, descent: 7500}, intro: '穿越迪纳拉山脉核心区的路线，途经克罗地亚、波斯尼亚和黑山边境，穿越喀斯特高原和传统牧羊人村落。'}
            ]
        },
        '阿尔巴尼亚': {
            '阿尔卑斯山穿越': [
                {name: '阿尔卑斯山穿越', length: '200公里', time: '12-15天', startPoint: 'Theth', endPoint: 'Valbona', waypoints: ['Valbona Pass','Çerem峰','Rosh峰','Tropoja','Bogë'], elevation: {max: 2694, ascent: 9000, descent: 8500}, intro: '穿越阿尔巴尼亚北部"诅咒山脉"的史诗路线，途经深谷、喀斯特泉水和传统石屋村落，欧洲最后真正的荒野之一。'}
            ],
            'Vjosa河源头穿越': [
                {name: 'Vjosa河源头穿越', length: '120公里', time: '8-10天', startPoint: 'Vovousa', endPoint: 'Tepelena', waypoints: ['Mertzani山','Dhëmbel山','Nemerçka山','Këlcyra峡谷','Bënjë温泉'], elevation: {max: 2485, ascent: 7000, descent: 6500}, intro: '沿欧洲最后一条自由流淌的野生大河源头穿越，途经希腊-阿尔巴尼亚边境的偏远山区和传统牧羊人小道。'}
            ]
        },
        '黑山': {
            '杜米托尔国家公园穿越': [
                {name: '杜米托尔国家公园穿越', length: '80公里', time: '5-7天', startPoint: 'Žabljak', endPoint: 'Plužine', waypoints: ['Black Lake','Bobotov Kuk','Škrčka Lakes','Piva Canyon','Piva Monastery'], elevation: {max: 2523, ascent: 6000, descent: 5500}, intro: '穿越黑山北部冰川地貌国家公园的路线，途经18个冰川湖、欧洲最深峡谷和巴尔干最高铁路桥。'}
            ],
            'Prokletije山脉穿越': [
                {name: 'Prokletije山脉穿越', length: '120公里', time: '8-10天', startPoint: 'Gusinje', endPoint: 'Plav', waypoints: ['Volušnica峰','Ropojana Valley','Tromeđa峰','Hrid Lake','Ali Pasha Springs'], elevation: {max: 2694, ascent: 8000, descent: 7500}, intro: '穿越"巴尔干阿尔卑斯"最崎岖山区的路线，途经阿尔巴尼亚、黑山和科索沃边境，欧洲最后未被开发的山区之一。'}
            ]
        },
        '北马其顿': {
            'Shar山脉穿越': [
                {name: 'Shar山脉穿越', length: '100公里', time: '7-9天', startPoint: 'Popova Šapka', endPoint: 'Mavrovo', waypoints: ['Titov Vrv','Ljuboten峰','Bogovinje','Vratnica','Galičica山'], elevation: {max: 2748, ascent: 7000, descent: 6500}, intro: '穿越北马其顿与科索沃边境山区的路线，途经传统牧羊人村落、高山牧场和奥赫里德湖观景点。'}
            ],
            'Pelister国家公园穿越': [
                {name: 'Pelister国家公园穿越', length: '60公里', time: '4-6天', startPoint: 'Bitola', endPoint: 'Prespa湖', waypoints: ['Pelister峰','Mali Vrv','Golemo Ezero','Dihovo','Brajčino'], elevation: {max: 2601, ascent: 5000, descent: 4500}, intro: '穿越巴尔干最古老国家公园的路线，途经五针松森林和冰川湖，可观赏希腊和阿尔巴尼亚边境景色。'}
            ]
        },
        '芬兰': {
            '北极圈徒步': [
                {name: '北极圈徒步', length: '800公里', time: '40-45天', startPoint: 'Kilpisjärvi', endPoint: 'Halti', waypoints: ['Saana Fell','Käsivarsi Wilderness Area','Pallas-Yllästunturi National Park','Lemmenjoki National Park','Utsjoki'], elevation: {max: 1324, ascent: 20000, descent: 19500}, intro: '穿越芬兰拉普兰北极荒野的史诗路线，途经欧洲最大无人区之一，夏季极昼和秋季极光季最为壮观。'}
            ],
            'UKK路线': [
                {name: 'UKK路线', length: '240公里', time: '12-15天', startPoint: 'Koli', endPoint: 'Lieksa', waypoints: ['Herajärvi湖','Patvinsuo国家公园','Ruunaa保护区','Koli国家公园','Pielinen湖'], elevation: {max: 347, ascent: 6000, descent: 5500}, intro: '穿越芬兰东部湖区森林的路线，以总统Urho Kekkonen命名，途经传统木屋村落和原始针叶林。'}
            ]
        }
    },
    '非洲': {
        '坦桑尼亚': {
            '乞力马扎罗马切姆线': [
                {name: '乞力马扎罗马切姆线', length: '62公里', time: '6-7天', startPoint: '马切姆门', endPoint: '乌呼鲁峰', waypoints: ['热带雨林带','石南荒原带','高山荒漠带','基博营地','巴拉夫营地'], elevation: {max: 5895, ascent: 4000, descent: 4000}, intro: '非洲最高峰经典路线，穿越5个生态带，登顶成功率85%以上，需应对高原反应。'}
            ],
            '乞力马扎罗莱莫绍线': [
                {name: '乞力马扎罗莱莫绍线', length: '70公里', time: '7-8天', startPoint: '莱莫绍门', endPoint: '乌呼鲁峰', waypoints: ['希拉高原','熔岩塔','箭袋树林','巴兰科大峡谷','熔岩塔营地'], elevation: {max: 5895, ascent: 4200, descent: 4200}, intro: '风景最优美的登顶路线，有机会偶遇野生动物如大象和羚羊。'}
            ]
        },
        '肯尼亚': {
            '肯尼亚山环线': [
                {name: '肯尼亚山环线', length: '150公里', time: '10-12天', startPoint: '纳罗莫鲁门', endPoint: '恰古里亚门', waypoints: ['麦金德山谷','特莱基湖','奥勒萨蒂峰','莱纳纳峰','奥地利小屋'], elevation: {max: 5199, ascent: 3500, descent: 3500}, intro: '非洲第二高峰技术性路线，需穿越冰川和垂直岩壁，登顶需专业装备。'}
            ]
        },
        '埃塞俄比亚': {
            '瑟门山脉穿越': [
                {name: '瑟门山脉穿越', length: '120公里', time: '8-10天', startPoint: '德巴克镇', endPoint: '吉赫镇', waypoints: ['金贾尔峰','圣乔治峰','布瓦希特山口','吉拉达狒狒栖息地','埃塞俄比亚狼观测点'], elevation: {max: 4543, ascent: 2800, descent: 3000}, intro: '世界遗产路线，穿越“非洲大峡谷”，可观察特有野生动物。'}
            ]
        },
        '乌干达': {
            '鲁文佐里中央环线': [
                {name: '鲁文佐里中央环线', length: '180公里', time: '12-14天', startPoint: '尼亚卡伦吉贾', endPoint: '尼亚卡伦吉贾', waypoints: ['尼莱里河','大穆布库河','斯科特-埃利奥特山口','玛格丽塔峰','基安潘达沼泽'], elevation: {max: 5109, ascent: 4500, descent: 4500}, intro: '“月亮山脉”终极挑战，需穿越热带雨林、沼泽和冰川，登顶率仅30%。'}
            ]
        },
        '南非': {
            '德拉肯斯堡大穿越': [
                {name: '德拉肯斯堡大穿越', length: '220公里', time: '14-16天', startPoint: '森丁纳', endPoint: '布什曼斯内克', waypoints: ['图盖拉瀑布','大教堂峰','链梯峡谷','巨人城堡','因杰苏提山谷'], elevation: {max: 3482, ascent: 6000, descent: 5800}, intro: '南非最长徒步路线，包含世界第二高瀑布和桑人岩画遗址。'}
            ]
        }
    },
    '北美洲': {
        '美国': {
            '太平洋山脊步道': [
                {name: '太平洋山脊步道', length: '4265公里', time: '4-6个月', startPoint: '美加边境', endPoint: '美墨边境', waypoints: ['北喀斯喀特山脉','火山口湖国家公园','塞拉尼华达山脉','约塞米蒂国家公园','圣贝纳迪诺山脉'], elevation: {max: 4009, ascent: 48931, descent: 48894}, intro: '北美徒步三重冠之一，纵贯华盛顿州、俄勒冈州和加利福尼亚州，穿越25个国家森林和7个国家公园，需应对极端天气和野生动物。'}
            ],
            '阿巴拉契亚小道': [
                {name: '阿巴拉契亚小道', length: '3516公里', time: '5-7个月', startPoint: '乔治亚州斯普林格山', endPoint: '缅因州卡塔丁山', waypoints: ['大雾山国家公园','谢南多厄国家公园','白山国家森林','百米荒原','马萨诸塞州伯克郡'], elevation: {max: 2025, ascent: 140000, descent: 140000}, intro: '世界最长的连续徒步路线，穿越14个州，设有250+庇护所，需应对潮湿气候和陡峭地形。'}
            ],
            '大陆分水岭小径': [
                {name: '大陆分水岭小径', length: '4988公里', time: '6个月', startPoint: '新墨西哥州边境', endPoint: '蒙大拿州边境', waypoints: ['吉拉国家森林','科罗拉多高原','黄石国家公园','鲍勃·马歇尔荒野','冰川国家公园'], elevation: {max: 4267, ascent: 60000, descent: 60000}, intro: '沿落基山脉脊线延伸，30%路段无标识，需携带防熊喷雾，成功完成者不足百人。'}
            ],
            '约翰·缪尔径': [
                {name: '约翰·缪尔径', length: '356公里', time: '3周', startPoint: '约塞米蒂山谷', endPoint: '惠特尼峰', waypoints: ['图奥勒米草甸','塞尔登山口','进化盆地','森林湖','克雷斯特山口'], elevation: {max: 4418, ascent: 15200, descent: 12000}, intro: '穿越塞拉山脉核心区，需翻越11个3000米以上山口，沿途有世界最大花岗岩群和原始高山湖泊。'}
            ],
            '海杜克步道': [
                {name: '海杜克步道', length: '1307公里', time: '3个月', startPoint: '拱门国家公园', endPoint: '锡安国家公园', waypoints: ['峡谷地国家公园','圆顶礁国家公园','大阶梯-埃斯卡兰特','北缘小径','布莱斯峡谷'], elevation: {max: 3484, ascent: 30000, descent: 30000}, intro: '穿越6个国家公园的沙漠路线，水源稀缺，仅10人完成全程，需携带GPS导航设备。'}
            ],
            '冰河时代步道': [
                {name: '冰河时代步道', length: '1931公里', time: '3个月', startPoint: '威斯康星州多尔斯县', endPoint: '威斯康星州波塔瓦托米州立公园', waypoints: ['基沃尼半岛','契普瓦冰碛','德文斯冰碛','密尔沃基河峡谷','霍雷伯山'], elevation: {max: 595, ascent: 15000, descent: 15000}, intro: '沿古冰川遗迹延伸，可见壶穴和漂砾等地质奇观，需穿越34个县级行政区。'}
            ]
        },
        '加拿大': {
            '大分水岭步道': [
                {name: '大分水岭步道', length: '1200公里', time: '2个月', startPoint: '阿尔伯塔省卡克罗斯', endPoint: '不列颠哥伦比亚省菲尔蒙特', waypoints: ['卡纳纳斯基斯乡村','阿西尼博因山省立公园','罗布森山省立公园','贾斯珀国家公园','耶洛黑德山口'], elevation: {max: 2590, ascent: 25000, descent: 25000}, intro: '沿落基山脉主脊线延伸，需穿越无人区，遭遇灰熊概率高达70%，需团队协作完成。'}
            ],
            '西海岸步道': [
                {name: '西海岸步道', length: '75公里', time: '6-8天', startPoint: '班菲尔德', endPoint: '伦弗鲁港', waypoints: ['塞切特湾','洛基岬','沃尔伯恩湾','欧文角','卡梅纳斯湾'], elevation: {max: 200, ascent: 1200, descent: 1200}, intro: '太平洋沿岸技术性路线，需攀爬100+梯子，穿越潮汐区，每日仅限60人进入。'}
            ]
        },
        '墨西哥': {
            '铜峡谷穿越': [
                {name: '铜峡谷穿越', length: '200公里', time: '10天', startPoint: '巴托皮拉斯', endPoint: '乌里克', waypoints: ['塔拉雷库阿峡谷','西纳罗阿河','巴索阿希瀑布','瓜丘奇印第安村落','埃尔迪维萨德罗'], elevation: {max: 2435, ascent: 8000, descent: 9000}, intro: '穿越塔拉乌马拉印第安领地，需应对40℃高温，部分路段需雇佣当地向导。'}
            ]
        }
    },
    '南美洲': {
        '智利': {
            '百内国家公园O线': [
                {name: '百内国家公园O线', length: '100公里', time: '10天', startPoint: '塞隆营地', endPoint: '三塔大本营', waypoints: ['迪克逊营地','罗斯佩洛斯营地','埃尔帕索营地','格雷冰川营地','法国谷','诺登斯淇奥湖','佩欧埃湖','角峰'], elevation: {max: 2800, ascent: 5000, descent: 5000}, intro: '智利百内国家公园大环线，穿越巴塔哥尼亚核心区，需应对强风和多变天气，途经花岗岩塔峰、冰川湖泊等地质奇观。'}
            ],
            '百内国家公园W线': [
                {name: '百内国家公园W线', length: '72公里', time: '5天', startPoint: '三塔大本营', endPoint: '格雷冰川营地', waypoints: ['诺登斯淇奥湖','佩欧埃湖','角峰','法国谷'], elevation: {max: 2800, ascent: 3500, descent: 3500}, intro: '世界级徒步路线，被《孤独星球》评为全球最佳，可近距离观赏百内三塔和格雷冰川。'}
            ]
        },
        '阿根廷': {
            '菲茨洛伊峰环线': [
                {name: '菲茨洛伊峰环线', length: '120公里', time: '8-10天', startPoint: '查尔腾小镇', endPoint: '查尔腾小镇', waypoints: ['托雷峰营地','波尹赛诺特营地','卡普里湖','三湖','北冰原观景台'], elevation: {max: 3405, ascent: 6000, descent: 6000}, intro: '穿越阿根廷冰川国家公园，途经90度垂直岩壁的菲茨洛伊峰，需专业装备应对强风。'}
            ],
            '莫雷诺冰川穿越': [
                {name: '莫雷诺冰川穿越', length: '80公里', time: '6天', startPoint: '埃尔卡拉法特', endPoint: '阿根廷湖', waypoints: ['冰川观景台','南冰原边缘','冰碛峡谷','莫雷诺东脊'], elevation: {max: 2500, ascent: 3000, descent: 2800}, intro: '世界最活跃冰川徒步，每日推进2米，冰崩轰鸣声可达120分贝。'}
            ]
        },
        '秘鲁': {
            '圣克鲁兹徒步': [
                {name: '圣克鲁兹徒步', length: '50公里', time: '4天', startPoint: '瓦拉斯', endPoint: '卡什马', waypoints: ['瓦斯卡兰峰观景台','塔乌利拉科查湖','圣克鲁兹垭口','基斯卡邦巴山谷'], elevation: {max: 4750, ascent: 2500, descent: 3000}, intro: '安第斯山脉精华段，被《国家地理》评为全球最美20条路线之一，需应对高原反应。'}
            ],
            '印加古道': [
                {name: '印加古道', length: '46公里', time: '4天', startPoint: '82公里标记处', endPoint: '马丘比丘', waypoints: ['拉亚布兰卡垭口','鲁纳塔纳遗址','帕塔拉克塔遗址','太阳门'], elevation: {max: 4200, ascent: 2000, descent: 2500}, intro: '世界文化遗产路线，每日限500人进入，需提前半年预约许可。'}
            ]
        },
        '玻利维亚': {
            '科迪勒拉皇家穿越': [
                {name: '科迪勒拉皇家穿越', length: '150公里', time: '12天', startPoint: '拉巴斯', endPoint: '索拉塔', waypoints: ['伊利亚姆普峰','孔多里里峰','查卡塔亚冰川','千湖高原','月亮谷'], elevation: {max: 6438, ascent: 8000, descent: 7500}, intro: '安第斯山脉最险峻段，需穿越6座6000米级山峰，氧气含量仅为海平面40%。'}
            ]
        },
        '委内瑞拉': {
            '罗赖马山登顶': [
                {name: '罗赖马山登顶', length: '80公里', time: '6天', startPoint: '帕拉伊特普伊村', endPoint: '罗赖马山顶', waypoints: ['库克南瀑布','水晶谷','三叉戟岩','食肉植物平原'], elevation: {max: 2810, ascent: 3500, descent: 3500}, intro: '平顶山地质奇观，《失落的世界》原型地，需应对热带雨林和高原双重环境。'}
            ]
        }
    },
    '大洋洲': {
        '新西兰': {
            '旺格努依之旅': [
                {name: '旺格努依之旅', length: '145公里', time: '5-7天', startPoint: '陶波湖', endPoint: '旺格努依河口', waypoints: ['普雷鲁阿峡谷','马蒂马蒂昂加急流','奥哈库尼山毛榉林','塔马努伊峡谷','皮皮里基文化遗址'], elevation: {max: 650, ascent: 1800, descent: 2000}, intro: '新西兰最长荒野独木舟与徒步混合路线，穿越毛利人圣地，需应对激流和茂密雨林。'}
            ],
            '希菲步道': [
                {name: '希菲步道', length: '82公里', time: '4-6天', startPoint: '布朗湾', endPoint: '科利维尔', waypoints: ['卡胡朗吉国家公园','萨克维尔山隘','路易斯溪','小希菲海滩','佩里西谷'], elevation: {max: 920, ascent: 2500, descent: 2500}, intro: '穿越南岛西北部荒野，途经新西兰最高海崖和史前冰川遗迹，每日限60人进入。'}
            ]
        },
        '澳大利亚': {
            '比布蒙步道': [
                {name: '比布蒙步道', length: '1000公里', time: '6-8周', startPoint: '珀斯', endPoint: '奥尔巴尼', waypoints: ['达令山脉','惠灵顿国家公园','弗兰克兰河','巨人谷','托蒂拉普国家公园'], elevation: {max: 660, ascent: 15000, descent: 15000}, intro: '世界最长连续徒步路线之一，穿越西澳原始森林和花岗岩山脉，需携带防蛇装备。'}
            ],
            '路上通道': [
                {name: '路上通道', length: '80公里', time: '6-8天', startPoint: '摇篮山', endPoint: '圣克莱尔湖', waypoints: ['巴恩布拉夫峰','佩利昂高原','弗格斯湖','急流峡谷','回声角'], elevation: {max: 1545, ascent: 3000, descent: 2800}, intro: '塔斯马尼亚世界遗产区核心路线，穿越冰川刻蚀的荒原和古老桉树林。'}
            ],
            '大洋路徒步': [
                {name: '大洋路徒步', length: '106公里', time: '7天', startPoint: '阿波罗湾', endPoint: '十二门徒', waypoints: ['奥特韦角','吉布森台阶','洛克阿德峡谷','群岛湾','马特斯休息站'], elevation: {max: 280, ascent: 3500, descent: 3500}, intro: '紧贴维多利亚州危险海岸线，需应对强风和潮汐，部分路段需攀爬海蚀崖。'}
            ],
            '休谟和霍维尔小道': [
                {name: '休谟和霍维尔小道', length: '440公里', time: '4周', startPoint: '亚斯', endPoint: '阿尔伯里', waypoints: ['科西乌斯科国家公园','雪山峡谷','图穆特河','布林达贝拉山脉'], elevation: {max: 2228, ascent: 12000, descent: 12000}, intro: '重现1824年探险家路线的史诗级穿越，需横渡多条无桥河流。'}
            ]
        }
    }
};