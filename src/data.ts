import {faker} from '@faker-js/faker'

import image1 from './assets/texture-1.jpeg'
import image2 from './assets/texture-2.jpeg'
import image3 from './assets/texture-3.jpeg'
import image4 from './assets/texture-4.jpeg'
import image5 from './assets/texture-5.jpeg'
import image6 from './assets/texture-6.jpeg'
import image7 from './assets/texture-7.jpeg'

const IMAGES = [image1, image2, image3, image4, image5, image6, image7]

export const DATA = Array.from({length: 7}, (_, i) => i).map(id => ({
  id,
  title: faker.lorem.words(3),
  subText: faker.lorem.words(4),
  description: faker.lorem.sentence(10),
  image: IMAGES[id],
}))
