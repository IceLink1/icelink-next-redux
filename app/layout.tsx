import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <header className={styles.header}>
            <Nav />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
