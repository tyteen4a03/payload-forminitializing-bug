'use client'

import { UIFieldClientComponent } from 'payload'
import { useField, useForm } from '@payloadcms/ui'

const TestClientField: UIFieldClientComponent = ()  => {
  const { initializing } = useForm();
  const { formInitializing } = useField({
    path: '',
  });

  if (initializing !== formInitializing) {
    console.log("initializing != formInitializing!", initializing, formInitializing);
  } else {
    console.log("initializing == formInitializing", initializing, formInitializing);
  }

  return <>test</>
}

export default TestClientField;