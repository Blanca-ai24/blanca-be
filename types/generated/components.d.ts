import type { Schema, Attribute } from '@strapi/strapi';

export interface ChatContactInfo extends Schema.Component {
  collectionName: 'components_chat_contact_infos';
  info: {
    displayName: 'Contact Info';
    icon: 'dashboard';
  };
  attributes: {
    fullName: Attribute.String;
    phoneNumber: Attribute.String;
    email: Attribute.Email;
  };
}

export interface ChatConversations extends Schema.Component {
  collectionName: 'components_chat_conversations';
  info: {
    displayName: 'Conversations';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    role: Attribute.String;
    message: Attribute.Text & Attribute.Required;
    media: Attribute.Media;
    time: Attribute.String;
    user: Attribute.Relation<
      'chat.conversations',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chat.contact-info': ChatContactInfo;
      'chat.conversations': ChatConversations;
    }
  }
}
