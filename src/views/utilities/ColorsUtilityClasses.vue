<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Colors Utility Classes</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              Color defining utility classes can be found in
              <span class="c-important">08_utilities/utilities.colors.scss</span
              >, we can use classes in this file to change color of text (<span
                class="ff-mono"
                >color</span
              >) and background (<span class="ff-mono">background-color</span>)
              of the element we will use these classes on.
            </p>

            <p class="mb-0">
              If you want to change colors themselves, you can find them defined
              in
              <span class="c-important">01_settings/settings.colors.scss</span>.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="primary-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Primary backgrounds</h2>
            </header>
            <table class="o-color-table">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <!-- 
                    example class will overload current color variables and show
                    original colors from DS
                  -->
                  <td class="o-color-table__color example">
                    <div class="bg-primary--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--light</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-primary--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-primary--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$primary-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="secondary-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Secondary backgrounds</h2>
            </header>
            <table class="o-color-table">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--light</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-secondary--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-secondary--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$secondary-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="tertiary-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Tertiary backgrounds</h2>
            </header>

            <table class="o-color-table">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--light</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-tertiary--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-tertiary--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$tertiary-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="positive-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Positive backgrounds</h2>
            </header>

            <table class="o-color-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--light</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-positive--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-positive--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$positive-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="warning-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Warning backgrounds</h2>
            </header>

            <table class="o-color-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--light</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-warning--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-warning--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$warning-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="negative-backgrounds">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Negative backgrounds</h2>
            </header>

            <table class="o-color-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--lightest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--lightest</span>
                  </td>
                  <td>
                    <span class="c-important">#eae7fc</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--light</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#936cbf</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--lighter c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--lighter</span>
                  </td>
                  <td>
                    <span class="c-important">#7847af</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c</span>
                  </td>
                  <td>
                    <span class="c-important">#5d2d93</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#491880</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--dark c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--dark</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--dark</span>
                  </td>
                  <td>
                    <span class="c-important">#360a66</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-negative--darkest c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-negative--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">$negative-c--darkest</span>
                  </td>
                  <td>
                    <span class="c-important">#2b0d4c</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="complementary-colors">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Complementary Colors</h2>
            </header>
            <table class="o-color-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility class</th>
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-body c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-body</span>
                  </td>
                  <td>
                    <span class="c-important">$body-bg-c</span>
                  </td>
                  <td>
                    <span class="c-important">#edeff6</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-block c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-block</span>
                  </td>
                  <td>
                    <span class="c-important">$block-bg-c</span>
                  </td>
                  <td>
                    <span class="c-important">#fdfdff</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-neutral c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-neutral</span>
                  </td>
                  <td>
                    <span class="c-important">$neutral-c</span>
                  </td>
                  <td>
                    <span class="c-important">#e9eaf2</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-neutral--light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-neutral--light</span>
                  </td>
                  <td>
                    <span class="c-important">$neutral-c--light</span>
                  </td>
                  <td>
                    <span class="c-important">#f3f4f6</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-neutral--darker c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-neutral--darker</span>
                  </td>
                  <td>
                    <span class="c-important">$neutral-c--darker</span>
                  </td>
                  <td>
                    <span class="c-important">#d3d4d9</span>
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-light c-color-sample"></div>
                  </td>
                  <td>
                    <span class="c-important">.bg-light</span>
                  </td>
                  <td>
                    <span class="c-important">$light-c</span>
                  </td>
                  <td>
                    <span class="c-important">#ffffff</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <aside class="o-page__side o-page__side--last">
        <article-navigation :article-sections="sections" />
      </aside>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getArticleNavSections } from "@/helpers/htmlHelpers";

import ArticleNavigation from "@/components/common/ArticleNavigation.vue";

export default defineComponent({
  name: "ColorsUtilityClasses",
  components: {
    ArticleNavigation,
  },
  setup() {
    const sections = getArticleNavSections();

    return {
      sections,
    };
  },
});
</script>
