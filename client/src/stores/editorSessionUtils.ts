import { useEditorStore } from './editor-store';

export function useSessionQueryShared() {
  return useEditorStore((s) => {
    const { acl } = s.getFocusedSession();
    return (acl || []).length > 0;
  });
}

export function useSessionQueryError() {
  return useEditorStore((s) => {
    const { queryError, selectedStatementId } = s.getFocusedSession();
    if (queryError) {
      return queryError;
    }
    if (selectedStatementId) {
      const statementError = s.statements[selectedStatementId]?.error?.title;
      if (statementError) {
        return statementError;
      }
    }
    return;
  });
}

export function useSessionBatch() {
  return useEditorStore((s) => {
    const { batchId } = s.getFocusedSession();
    if (batchId) {
      const batch = s.batches[batchId];
      if (batch) {
        return batch;
      }
    }
  });
}

export function useSessionTableLink(sequence?: number) {
  return useEditorStore((s) => {
    const { queryId, connectionClient } = s.getFocusedSession();
    const connectionClientId = connectionClient?.id;

    let tableLink = '';

    if (queryId && queryId !== 'new') {
      tableLink = `/query-table/${queryId}`;

      const searchParams = new URLSearchParams();

      if (connectionClientId) {
        searchParams.append('connectionClientId', connectionClientId);
      }
      if (sequence) {
        searchParams.append('sequence', sequence.toString());
      }

      tableLink += `?${searchParams.toString()}`;
    }

    return tableLink;
  });
}
