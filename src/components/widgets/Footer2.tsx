import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-muted py-6 text-sm text-gray-700 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8">
        <ul className="mb-4 flex pl-2 rtl:pl-0 rtl:pr-2 md:order-1 md:mb-0">
          {links &&
            links.map(({ label, href }, index) => (
              <li key={`item-link-${index}`}>
                <a
                  className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                  aria-label={label}
                  href={href}
                >
                  {label}
                </a>
                {links.length - 1 !== index && <span className="mr-1 rtl:mr-0 rtl:ml-1"> · </span>}
              </li>
            ))}
        </ul>
        {footNote}
      </div>
    </div>
  );
};

export default Footer2;
