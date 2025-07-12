# How to create two to three navbar rows?

- mobile is two cols: "grid grid-cols-[auto,auto]"
- md is three cols: "md:grid-cols-[1fr,auto,1fr]"
- Logo should be at start of its section: "justify-self-start"
- nav in mobile should be second row and full span:"col-span-full row-start-2"
- nav in md should be part of three cols and starts at fr 2, ends at fr 3:" md:col-span-1 md:col-start-2 md:row-start-1"
- cart button should be ended: "justify-self-end"

```ts
<header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple ~h-12/20" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="~text-lg/xl text-black">
                {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>

```