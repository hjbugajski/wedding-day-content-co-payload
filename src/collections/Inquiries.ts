import { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types';
import { Resend } from 'resend';

import { hasRole, Role } from '../access';

import { Inquiry } from 'payload/generated-types';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const beforeChangeHook: CollectionBeforeChangeHook<Inquiry> = async ({ data, operation }) => {
  if (operation === 'create') {
    const resend = new Resend(process.env.RESEND_KEY);

    await resend.emails.send({
      from: process.env.EMAIL_FROM_ADDRESS,
      to: process.env.EMAIL_TO_ADDRESS,
      subject: `New Inquiry from ${data.first} ${data.last}`,
      html: `
        <p style="margin: 0 0 4px"><strong>First name</strong></p>
        <p style="margin: 0 0 16px">${data.first}</p>

        <p style="margin: 0 0 4px"><strong>Last name</strong></p>
        <p style="margin: 0 0 16px">${data.last}</p>

        <p style="margin: 0 0 4px"><strong>Email</strong></p>
        <p style="margin: 0 0 16px">${data.email}</p>

        <p style="margin: 0 0 4px"><strong>Phone</strong></p>
        <p style="margin: 0 0 16px">${data.phone}</p>

        <p style="margin: 0 0 4px"><strong>Start date</strong></p>
        <p style="margin: 0 0 16px">${formatDate(data.startDate)}</p>

        <p style="margin: 0 0 4px"><strong>End date</strong></p>
        <p style="margin: 0 0 16px">${data.endDate ? formatDate(data.endDate) : '<em>none</em>'}</p>

        <p style="margin: 0 0 4px"><strong>Budget</strong></p>
        <p style="margin: 0 0 16px">${data.budget}</p>

        <p style="margin: 0 0 4px"><strong>Location</strong></p>
        <p style="margin: 0 0 16px">${data.location}</p>

        <p style="margin: 0 0 4px"><strong>Information</strong></p>
        <p style="margin: 0 0 16px">${data.information}</p>

        <p style="margin: 0 0 4px"><strong>Photographer name(s)</strong></p>
        <p style="margin: 0 0 16px">${data.photographerNames || '<em>none</em>'}</p>

        <p style="margin: 0 0 4px"><strong>Open to other creators</strong></p>
        <p style="margin: 0 0 16px">${data.openToOtherCreators === 'no' ? 'No' : 'Yes'}</p>
      `,
    });
  }

  return data;
};

const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    read: hasRole(Role.Admin, Role.Editor),
    create: () => true,
    update: () => false,
    delete: hasRole(Role.Admin),
  },
  hooks: {
    beforeChange: [beforeChangeHook],
  },
  fields: [
    {
      name: 'first',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'last',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'budget',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'information',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photographerNames',
      type: 'text',
    },
    {
      name: 'openToOtherCreators',
      type: 'radio',
      required: true,
      admin: {
        layout: 'horizontal',
      },
      options: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Yes',
          value: 'yes',
        },
      ],
    },
  ],
};

export default Inquiries;
