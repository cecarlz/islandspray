import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-4xl mx-auto">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl text-center" />}
    {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 text-center">{content}</p>}
    <div className="flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          {items &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-contact-${index}`} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 mb-4">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900 dark:text-white">{title}</h3>
                {Array.isArray(description) ? (
                  description.map((desc, i) => (
                    <p key={`desc-${index}-${i}`} className="text-gray-600 dark:text-slate-400">
                      {desc}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
