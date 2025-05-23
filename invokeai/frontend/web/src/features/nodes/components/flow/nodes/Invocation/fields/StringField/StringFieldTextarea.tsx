import { Textarea } from '@invoke-ai/ui-library';
import type { FieldComponentProps } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/types';
import { useStringField } from 'features/nodes/components/flow/nodes/Invocation/fields/StringField/useStringField';
import { NO_DRAG_CLASS, NO_PAN_CLASS, NO_WHEEL_CLASS } from 'features/nodes/types/constants';
import type { StringFieldInputInstance, StringFieldInputTemplate } from 'features/nodes/types/field';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const StringFieldTextarea = memo(
  (props: FieldComponentProps<StringFieldInputInstance, StringFieldInputTemplate>) => {
    const { t } = useTranslation();
    const { value, onChange } = useStringField(props);

    return (
      <Textarea
        className={`${NO_DRAG_CLASS} ${NO_PAN_CLASS} ${NO_WHEEL_CLASS}`}
        placeholder={t('workflows.emptyStringPlaceholder')}
        value={value}
        onChange={onChange}
        h="full"
        fontSize="sm"
        p={2}
      />
    );
  }
);

StringFieldTextarea.displayName = 'StringFieldTextarea';
