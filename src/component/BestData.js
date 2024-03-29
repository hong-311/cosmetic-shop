//배열 데이터만 담을 js파일
const initialBests = [
  {
      id: 1,
      name: "프레쉬 브리즈 핸드워시",
      price: 14000,
      descript: "자연에서 영감을 받은 신선하고 상큼한 브리즈 향의 핸드워시",
      image:"https://media.istockphoto.com/id/1203784249/photo/blank-transparent-amber-black-glass-bottle-with-white-label-mockup.jpg?s=612x612&w=0&k=20&c=BFSuLJjz54OxPuo2HOivz_ASzu6LuOqXyt1bHMBze00=",
      like: false
    },
  {
      id: 2,
      name: "헤이지 플라워 블러셔",
      price: 18000,
      descript: "여린 발색, 물 오른 청순톤 얼굴",
      image: "https://media.istockphoto.com/id/1152571527/photo/professional-makeup-tools-with-colorful-curves-paper-background.jpg?s=612x612&w=0&k=20&c=MKoChWXs47KUCaaOVG7JqmMh9sqNfFrb6xo6dyufjO0=",
      like: false
  }, 
  {
      id: 3,
      name: "블루 오아시스 앰플",
      price: 23000,
      descript: "신선한 바다 바람을 느끼는 듯한 상쾌함",
      image: "https://media.istockphoto.com/id/1282415009/photo/medical-spa-cosmetics-serum-on-blue-water-texture-background-with-splashes.jpg?s=612x612&w=0&k=20&c=-J3NTXNUO_LlcLK9c9a7p62L530-nolRSO7-ZRRZuIE=",
      like: false
  },
  {
      id: 4,
      name: "쉬어 미스트 립 케어",
      price: 8000,
      descript: "끈적임 없이 유리알 광택을 연출하는 글로우 립밤",
      image: "https://media.istockphoto.com/id/1014344686/photo/creamy-make-up-products-top-view-of-decorative-cosmetic-containers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=etV6snth0Zhrpwb46luMdV30YxS_evsVVwqjeiJYM-A=",
      like: false
  },
  {
      id: 5,
      name: "아보썸 리프레싱 바디미스트",
      price: 8500,
      descript: "신선한 아보카도 향과 함께 몸과 마음을 감싸는 상쾌함",
      image: "https://media.istockphoto.com/id/1304157246/photo/set-of-natural-organic-spa-beauty-products-on-wooden-board-homemade-soap-moisturizer-cream.jpg?s=612x612&w=0&k=20&c=7XY244iHppwZc8MtpIO_fo7SyAkIC4fjncZgOg4XGtE=",
      like: false
  }, 
  {
      id: 6,
      name: "플로럴 헤이븐 셰도우 팔레트",
      price: 38000,
      descript: "부드러운 로즈 톤과 섬세한 플로럴 색감",
      image: "https://media.istockphoto.com/id/1370468785/photo/a-nude-eyeshadow-palette-and-makeup-artists-tools-on-a-marble-vanity-brushes-for-powder-blush.jpg?s=612x612&w=0&k=20&c=8K-VjKOtdomupO_HDwhOmVe3KNKGwquUVMzq9bbLi7Q=",
      like: false
  }, 
  {
      id: 7,
      name: "퓨어 에코 비건 스킨케어",
      price: 42000,
      descript: "자연산 미네랄로 피부에 영양을 공급하는 올 네추럴 비건 스킨케어. 피부를 부드럽게 감싸는 촉촉한 텍스처",
      image: "https://media.istockphoto.com/id/1223236097/vector/vector-tinted-brown-glass-or-plastic-jar-pump-bottle-dropper-bottle-package-set-with.jpg?s=612x612&w=0&k=20&c=sDU8eVuzeFd9wljPtYGI0AplindYjMX_bzU3bBiZAQM=",
      like: false
  },
  {
      id: 8,
      name: "벨벳 로맨스 립스틱",
      price: 22000,
      descript: "부드럽게 발리는 벨벳 텍스처로 입술에 로맨틱한 감성을 더해주는 립스틱",
      image: "https://media.istockphoto.com/id/1151790560/photo/set-of-beautiful-lipsticks-on-pink-background.jpg?s=612x612&w=0&k=20&c=fDiVJwXg3zueLRqo8cCAny8pDYHa5tZ5Hpr5zdzb8lg=",
      like: false
  },
  {
      id: 9,
      name: "에어 리프레시 마스터 쿠션",
      price: 33000,
      descript: "투명 피부, 내추럴 누드 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
      image: "https://media.istockphoto.com/id/944259474/photo/foundation-cushion-with-sponge-and-puff-on-white-background.jpg?s=612x612&w=0&k=20&c=g_RBp1ST3erPpLUyqAnaEnY-NV_bz_g9vmCZn9pNFN8=",
      like: false
  },
  {
      id: 10,
      name: "메탈릭 볼륨 마스터",
      price: 16000,
      descript: "반짝이는 메탈릭한 속눈썹을 선사하는 롱래쉬 마스카라",
      image: "https://media.istockphoto.com/id/1325452536/photo/mascara-on-blue-background-top-view-makeup-product.jpg?s=612x612&w=0&k=20&c=s3WuAnEgfD-_aoHZInTbbzT8IoPHt3LHbqDqIqsKbIc=",
      like: false
  },
  {
      id: 11,
      name: "프레시 윙 라이너",
      price: 18000,
      descript: "또렷한 인상을 완성하는 아이라이너",
      image: "https://media.istockphoto.com/id/500173419/photo/eyeliner-and-stroke.jpg?s=612x612&w=0&k=20&c=4pjKfr-zTqzJVBcGp8nOatztocKWyxEJqDy2nFB8MqM=",
      like: false
  },
  {
      id: 12,
      name: "비비드 코렉트 컨실러",
      price: 11000,
      descript: "결점없는 완벽 커버",
      image: "https://media.istockphoto.com/id/944065736/photo/doe-foot-applicator-next-to-tube-of-creamy-concealer-high-cover-to-conceal-spots-blemishes.jpg?s=612x612&w=0&k=20&c=PKxanY6KVaIe48qpphtVxMKtBch50Bv6NO7pqCudmNs=",
      like: false
  }
];

export { initialBests };