import Select from "react-select"
import { Content } from "./styles"

type Props = {
    OnChange: any
    OnBlur?: () => void
    OnFocus?: () => void
    OnKeyDown?: () => void
    id: string
    name: string
    multi?: boolean
    searchable?: boolean
    clearable?: boolean
    options: any[]
    OnInputChange?: any
    OnMenuClose?: any
    OnMenuOpen?: any
    value?: any
    ariaLiveMessages?: any
    inputValue?: any
    errormessage?: any
    ariaInvalid?: any
    ariaLabel?: any
    ariaLabelledby?: any
    ariaLive?: any
    autoFocus?: boolean
    backspaceRemovesValue?: any
    blurInputOnSelect?: boolean
    captureMenuScroll?: boolean
    classNamePrefix?: string
    classNames?: any
    closeMenuOnScroll?: boolean
    closeMenuOnSelect?: boolean
    components?: any
    controlShouldRenderValue?: boolean
    delimiter?: string
    escapeClearsValue?: boolean
    filterOption?: any
    form?: string
    formatGroupLabel?: any
    formatOptionLabel?: any
    getOptionLabel?: any
    getOptionValue?: any
    hideSelectedOptions?: boolean
    inputId?: string
    instanceId?: string | number
    disabled?: boolean
    loading?: boolean
    isOptionDisabled?: any
    isOptionSelected?: any
    rtl?: boolean
    key?: any
    loadingMessage?: any
    maxMenuHeight?: number
    menuIsOpen?: boolean
    menuPlacement?: any
    menuPortalTarget?: any
    menuPosition?: any
    menuShouldBlockScroll?: boolean
    menuShouldScrollIntoView?: boolean
    minMenuHeight?: number
    noOptionsMessage?: any
    onMenuScrollToBottom?: any
    onMenuScrollToTop?: any
    openMenuOnClick?: boolean
    openMenuOnFocus?: boolean
    pageSize?: number
    placeholder?: string
    ref?: any
    screenReaderStatus?: any
    styles?: Object
    tabIndex?: number
    tabSelectsValue?: boolean
    theme?: any
    unstyled?: boolean
}

export const SelectField = ({id, name, multi, searchable, clearable, 
                             options, OnChange, OnInputChange, OnMenuClose, 
                             OnMenuOpen, value, ariaLiveMessages, inputValue,
                             errormessage, ariaInvalid, ariaLabel, ariaLabelledby,
                             ariaLive, autoFocus, backspaceRemovesValue, blurInputOnSelect,
                             captureMenuScroll, classNamePrefix, classNames, closeMenuOnScroll,
                             closeMenuOnSelect, components, controlShouldRenderValue, delimiter,
                             escapeClearsValue, filterOption, form, formatGroupLabel, formatOptionLabel,
                             getOptionLabel, getOptionValue, hideSelectedOptions, inputId, instanceId,
                             disabled, loading, isOptionDisabled, isOptionSelected, rtl, key, loadingMessage,
                             maxMenuHeight, menuIsOpen, menuPlacement, menuPortalTarget, menuPosition,
                             menuShouldBlockScroll, menuShouldScrollIntoView, minMenuHeight, noOptionsMessage,
                             OnBlur, OnFocus, OnKeyDown, onMenuScrollToBottom, onMenuScrollToTop, openMenuOnClick,
                             openMenuOnFocus, pageSize, placeholder, ref, screenReaderStatus, styles, tabIndex,
                             tabSelectsValue, theme, unstyled
                            }: Props) => {
    return (
        <Content>
            <Select 
                className="select-style"
                id={id}
                name={name}
                isMulti={multi}
                isSearchable={searchable}
                isClearable={clearable}
                options={options}
                inputValue={inputValue}
                onChange={OnChange}
                onInputChange={OnInputChange}
                onMenuClose={OnMenuClose}
                onMenuOpen={OnMenuOpen}
                value={value}
                ariaLiveMessages={ariaLiveMessages}
                aria-errormessage={errormessage}
                aria-invalid={ariaInvalid}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-live={ariaLive}
                autoFocus={autoFocus}
                backspaceRemovesValue={backspaceRemovesValue}
                blurInputOnSelect={blurInputOnSelect}
                captureMenuScroll={captureMenuScroll}
                classNamePrefix={classNamePrefix}
                classNames={classNames}
                closeMenuOnScroll={closeMenuOnScroll}
                closeMenuOnSelect={closeMenuOnSelect}
                components={components}
                controlShouldRenderValue={controlShouldRenderValue}
                delimiter={delimiter}
                escapeClearsValue={escapeClearsValue}
                filterOption={filterOption}
                form={form}
                formatGroupLabel={formatGroupLabel}
                formatOptionLabel={formatOptionLabel}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                hideSelectedOptions={hideSelectedOptions}
                inputId={inputId}
                instanceId={instanceId}
                isDisabled={disabled}
                isLoading={loading}
                isOptionDisabled={isOptionDisabled}
                isOptionSelected={isOptionSelected}
                isRtl={rtl}
                key={key}
                loadingMessage={loadingMessage}
                maxMenuHeight={maxMenuHeight}
                menuIsOpen={menuIsOpen}
                menuPlacement={menuPlacement}
                menuPortalTarget={menuPortalTarget}
                menuPosition={menuPosition}
                menuShouldBlockScroll={menuShouldBlockScroll}
                menuShouldScrollIntoView={menuShouldScrollIntoView}
                minMenuHeight={minMenuHeight}
                noOptionsMessage={noOptionsMessage}
                onBlur={OnBlur}
                onFocus={OnFocus}
                onKeyDown={OnKeyDown}
                onMenuScrollToBottom={onMenuScrollToBottom}
                onMenuScrollToTop={onMenuScrollToTop}
                openMenuOnClick={openMenuOnClick}
                openMenuOnFocus={openMenuOnFocus}
                pageSize={pageSize}
                placeholder={placeholder}
                ref={ref}
                required={false}
                screenReaderStatus={screenReaderStatus}
                styles={styles}
                tabIndex={tabIndex}
                tabSelectsValue={tabSelectsValue}
                theme={theme}
                unstyled={unstyled}
            />
        </Content>
    )
}