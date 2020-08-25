import React, { memo, useMemo } from 'react';
import ReactSelect, { components } from 'react-select';
// import Icon from '../Icon';

import Flag from 'react-world-flags';
import styles from '../../../styles/Screen.module.scss';

const getValue = (value, options) => {
  // if the value is a string, find that in the options and return it
  if (typeof value === 'string') {
    return options.find((option) => option.value === value);
  }

  // if the value is an object, key off of the id
  if (value && 'id' in value) {
    return options.find((option) => option.value.id === value.id);
  }

  return value;
};

export default memo(
  ({
    className,
    id,
    label,
    textSize,
    size,
    style,
    stylesSelect,
    disabled,
    error,
    touched,
    options,
    value,
    fullWidth,
    dropUp = false,
    components: componentsProp,
    onKeyDown,
    onChange,
    name,
    ...props
  }) => {
    const allStyles = useMemo(() => ({
      indicatorSeparator: () => {},
      control: (base) => ({
        ...base,
        border: 'none',
        background: 'none',
        boxShadow: 'none',
      }),
      singleValue: (base) => ({
        ...base,
        overflow: 'visible',
      }),
      valueContainer: (base) => ({
        ...base,
        overflow: 'visible',
      }),
      ...stylesSelect,
    }), [stylesSelect]);

    const NoOptionsMessage = ({ children, ...propsNoOption }) => (
      <components.NoOptionsMessage {...propsNoOption}>
        <span>No results found</span>
      </components.NoOptionsMessage>
    );

    const Placeholder = ({ children, ...propsPlaceholder }) => (
      <components.Placeholder {...propsPlaceholder}>
        <span>{children}</span>
      </components.Placeholder>
    );

    const SingleValue = ({ children, ...propsSingleValue }) => (
      <components.SingleValue {...propsSingleValue}>
        <span style={{width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
         <Flag code={'DE'} width="32" height="32" />
        </span>
      </components.SingleValue>
    );

    const handleChange = (e) => {
      onChange(name, e.value);
    };

    if (label) {
      return (
        <div className={className}>
          <div>
            <label disabled={disabled}>{label}</label>
            <ReactSelect
              styles={{ ...allStyles }}
              components={{
                SingleValue,
                Placeholder,
                NoOptionsMessage,
                ...componentsProp,
              }}
              options={options}
              fullWidth={fullWidth}
              onKeyDown={(ev) => {
                if (onKeyDown) {
                  onKeyDown(ev, { options });
                }
              }}
              {...props}
              isDisabled={disabled}
              error={error}
              dropUp={dropUp}
            />
          </div>
          {touched && error && <span className="custom-select__error">{error}</span>}
        </div>
      );
    }

    return (
      <div className={className}>
        <ReactSelect
          styles={{ ...allStyles }}
          components={{
            SingleValue,
            Placeholder,
            NoOptionsMessage,
            ...componentsProp,
          }}
          options={options}
          value={getValue(value, options)}
          fullWidth={fullWidth}
          onKeyDown={(ev) => {
            if (onKeyDown) {
              onKeyDown(ev, { options });
            }
          }}
          id={id}
          instanceId={id}
          {...props}
          isDisabled={disabled}
          error={error}
          onChange={handleChange}
        />
      </div>
    );
  },
);
