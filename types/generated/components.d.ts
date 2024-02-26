import type { Schema, Attribute } from '@strapi/strapi';

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
    dateAdded: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chat.conversations': ChatConversations;
    }
  }
}
