import EarthIcon from './icons/EarthIcon'
import BusinessIcon from './icons/BusinessIcon'
import ShoppingIcon from './icons/ShoppingIcon'

const features = [
  {
    name: 'Same day',
    description:
        'Get your items when you need them. No need for delivery, just pick up your items from the store.',
    icon: ShoppingIcon,
  },
  {
    name: 'Great for the environment.',
    description: 'We help reduce the carbon footprint by reducing the need for delivery services.',
    icon: EarthIcon,
  },
  {
    name: 'Support local businesses',
    description: 'We support local businesses and help you find everyday items near you.',
    icon: BusinessIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Why Buy it by me?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Buy it by me is the fast responsible way to find and buy products. We support local businesses and help you find everyday items near you, no delivery needed.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
  {features.map(({ name, description, icon: Icon }) => (
    <div key={name} className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <Icon aria-hidden="true" className="absolute top-1 left-1 w-16 h-16" />
        {name}
      </dt>{' '}
      <dd className="inline">{description}</dd>
    </div>
  ))}
</dl>

            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
