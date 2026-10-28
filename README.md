# blueprint-form

An accessibility-friendly form composition library for [BlueprintJS](https://blueprintjs.com/) using TypeScript, striving to be WCAG 2.1 compliant.

### Installation

Install the package along with its peer dependencies (React 18 and BlueprintJS 6):

```bash
npm install @lightbeamhealth/blueprint-form @blueprintjs/core @blueprintjs/datetime moment moment-timezone react react-dom
```

Load the Blueprint stylesheets once in your app:

```ts
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
```

Upgrading from 2.x? Version 3 replaces `@blueprintjs/datetime2` with `@blueprintjs/datetime` and changes how date values are stored. See the [CHANGELOG](CHANGELOG.md) for migration notes.

### Development

After cloning the repo locally, switch to the Node version specified in `.nvmrc` and install the required packages:

```bash
nvm use
npm install
```

To start development, run: `npm run dev`

This will start the `webpack-dev-server` at port `9000`, with hot reload enabled.

### Package Testing

Use this flow to validate exactly what will be published to npm.

1. Build distributable artifacts.

```bash
npm run build
```

2. Inspect publish contents without publishing.

```bash
npm pack --dry-run --json
```

Verify that `dist/index.js`, `dist/index.d.ts`, and the referenced declaration files in `dist` are present.

3. Create a local tarball.

```bash
npm pack
```

4. Install the generated tarball in a clean consumer project.

```bash
npm install /absolute/path/to/lightbeamhealth-blueprint-form-<version>.tgz
```

5. Validate consumer usage.

- Confirm install succeeds with compatible peer dependency versions.
- Import the package in the consumer app.
- Run the consumer build/tests and verify components render without console errors.

Peer dependency note: install failures such as `ERESOLVE` usually indicate incompatible consumer peer versions (for example Blueprint major mismatch).

### Publishing

1. Check out the intended release branch, then set up the Node version and dependencies as described in [Development](#development).

2. Validate the package as described in [Package Testing](#package-testing).

3. Bump version according to release type.

```bash
npm version patch
```

Use `minor` or `major` when appropriate.

4. Publish to npm.

```bash
npm publish
```

The `prepublishOnly` script rebuilds the package automatically, and `publishConfig` in `package.json` sets public access and the npm registry.

5. Push git changes and the tag created by `npm version`.

```bash
git push && git push --tags
```

### Capabilities

- [x] TypeScript based environment
- [x] Two-way (get & set) form setup
- [x] Ability to have fully flexible JSX mockup within the forms
- [x] Individual input validation controls
- [x] Input dependencies and variations 
- [x] Customization framework (e.g. composite controls)
- [ ] File upload input

### Milestones

- [x] Proof of concept with all capabilities
- [x] Input portfolio development
- [ ] Unit tests
- [ ] Documentation and packaging

### Components

- `TextInput`
- `TextArea`
- `NumberInput`
- `DateInput` (`StartDateInput`, `EndDateInput` variations)
- `SelectInput`
- `SelectBooleanInput`
- `Switch`
- `Checkbox`
- `CheckboxGroup`
- `RadioGroup`
- `SubmitButton`

In addition, you may use the exposed `useField` hook (see the [Formik reference](https://formik.org/docs/api/useField)) together with `useFormContext` and `Markup` to create your own composite components. See `CountryInput` in [examples/enroll.tsx](examples/enroll.tsx) for a complete example.

### Example

This is a form that show cases the full range of functions and components:

```tsx
/**
 * Example form
 */

import React from 'react';
import moment from 'moment';
import {
  Form,
  FormInstance,
  FormErrors,
  DateInput,
  StartDateInput,
  EndDateInput,
  TextInput,
  TextArea,
  NumberInput,
  Switch,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  SelectInput,
  SubmitButton
} from '@lightbeamhealth/blueprint-form';

const REGEX_NAME = /^[a-zA-Z ]+$/;

// Create an interface that defines the form data structure
export interface EnrollData {
  start: Date,
  end?: Date,
  examAt?: Date,
  tz: string,
  firstName: string,
  lastName: string,
  pin: string,
  hasScale: boolean,
  baselineWeight?: number,
  description: string,
  isLevelA: boolean,
  isLevelB: boolean,
  modules: string[],
  days: number[],
  dmType: string,
  color: string
}

// Create the markup
const Enroll = (): JSX.Element => {

  const isLarge = false;
  const isDisabled = false;

  // Set the initial data and create the form instance
  const initialData: EnrollData = {
    start: moment().add(1, 'day').toDate(),
    end: null,
    examAt: null,
    tz: 'US/Mountain',
    firstName: 'John',
    lastName: 'Doe',
    pin: '123',
    hasScale: true,
    baselineWeight: 123,
    description: 'Etiam varius neque feugiat elit aliquam venenatis.',
    isLevelA: true,
    isLevelB: false,
    modules: ['Y'],
    days: [1, 5],
    dmType: 'II',
    color: 'green'
  };
  const form = new FormInstance<EnrollData>(initialData);

  // Provide form level validation (e.g. validation on 2+ values)
  const validate = (values: EnrollData): FormErrors => {
    const errors: FormErrors = {};
    if (values.start != null && values.end != null && values.start > values.end) {
      errors.end = 'The end date must be after the start date!';
    }
    return errors;
  };

  // Submission
  const onSubmit = (data: EnrollData) => {
    console.log(data);
  };

  return (
    <Form
      form={form}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(props) => (
        <React.Fragment>
          <StartDateInput
            label="Start Date"
            name="start"
            fill
            required
            large={isLarge}
            disabled={isDisabled}
          />
          <EndDateInput
            label="End Date"
            name="end"
            fill
            large={isLarge}
            disabled={isDisabled}
          />
          <DateInput
            label="Exam Date"
            name="examAt"
            fill
            large={isLarge}
            disabled={isDisabled}
          />
          <TextInput
            label="First Name"
            name="firstName"
            pattern={REGEX_NAME}
            required
            large={isLarge}
            disabled={isDisabled}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            required
            large={isLarge}
            disabled={isDisabled}
          />
          <TextInput
            label="PIN"
            name="pin"
            type="password"
            large={isLarge}
            disabled={isDisabled}
          />
          <Switch
            label="Has Scale"
            name="hasScale"
            large={isLarge}
            disabled={isDisabled}
          />
          {props.values.hasScale && (
            <NumberInput
              label="Baseline Weight (lbs)"
              name="baselineWeight"
              fill
              required
              large={isLarge}
              disabled={isDisabled}
            />
          )}
          <TextArea
            label="Description"
            name="description"
            fill
            autoResize
            disabled={isDisabled}
          />
          <Checkbox
            label="Level A"
            name="isLevelA"
            large={isLarge}
            disabled={isDisabled}
          />
          {props.values.isLevelA && (
            <Checkbox
              label="Level B"
              name="isLevelB"
              large={isLarge}
              disabled={isDisabled}
            />
          )}
          <CheckboxGroup
            label="Modules"
            name="modules"
            options={[{
              label: 'Module X',
              value: 'X'
            }, {
              label: 'Module Y',
              value: 'Y'
            }, {
              label: 'Module Z',
              value: 'Z'
            }]}
            inline
            large={isLarge}
            disabled={isDisabled}
          />
          <CheckboxGroup
            label="Pick 2-3 Days of Week"
            name="days"
            options={[{
              label: 'Sunday',
              value: 0
            }, {
              label: 'Monday',
              value: 1
            }, {
              label: 'Tuesday',
              value: 2
            }, {
              label: 'Wednesday',
              value: 3
            }, {
              label: 'Thursday',
              value: 4
            }, {
              label: 'Friday',
              value: 5
            }, {
              label: 'Saturday',
              value: 6
            }]}
            inline
            minItems={2}
            maxItems={3}
            large={isLarge}
            disabled={isDisabled}
          />
          <RadioGroup
            label="Diabetes Type"
            name="dmType"
            options={[{
              label: 'Type I',
              value: 'I'
            }, {
              label: 'Type II',
              value: 'II'
            }]}
            large={isLarge}
            disabled={isDisabled}
          />
          <SelectInput
            label="Favorite Color"
            name="color"
            options={[{
              label: 'Red',
              value: 'red'
            }, {
              label: 'Yellow',
              value: 'yellow'
            }, {
              label: 'Green',
              value: 'green'
            }]}
            fill
            large={isLarge}
            disabled={isDisabled}
          />
          <br />
          <SubmitButton
            large={isLarge}
            disabled={isDisabled}
          >
            Get Data
          </SubmitButton>
        </React.Fragment>
      )}
    </Form>
  );

};
```